import os
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.config import DATABASE_URL

logger = logging.getLogger("wyt.database")

# Setup database engine: Neon PostgreSQL if provided, or SQLite fallback
db_url = DATABASE_URL
is_neon = False

if db_url and ("neon.tech" in db_url or "postgres" in db_url or "postgresql" in db_url):
    # Fix postgres:// to postgresql:// if needed
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)
    
    # Ensure sslmode=require for Neon DB
    if "sslmode=" not in db_url:
        separator = "&" if "?" in db_url else "?"
        db_url = f"{db_url}{separator}sslmode=require"
    
    try:
        engine = create_engine(
            db_url,
            pool_pre_ping=True,
            pool_recycle=300,
            pool_size=10,
            max_overflow=20
        )
        # Test connection
        with engine.connect() as conn:
            logger.info("Successfully connected to Neon PostgreSQL Database.")
        is_neon = True
        ACTIVE_DB_TYPE = "Neon PostgreSQL"
    except Exception as e:
        logger.warning(f"Failed to connect to Neon DB ({e}). Falling back to local SQLite database.")
        sqlite_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "wyt_trademark.db"))
        db_url = f"sqlite:///{sqlite_path}"
        engine = create_engine(db_url, connect_args={"check_same_thread": False})
        ACTIVE_DB_TYPE = "SQLite (Local Fallback)"
else:
    sqlite_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "wyt_trademark.db"))
    db_url = f"sqlite:///{sqlite_path}"
    engine = create_engine(db_url, connect_args={"check_same_thread": False})
    ACTIVE_DB_TYPE = "SQLite (Local Development)"

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
