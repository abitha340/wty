from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import SessionLocal, ACTIVE_DB_TYPE
from app.seed_data import seed_database
from app.routes import trademarks, auth, usage, credits

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize DB & Seed
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    yield

app = FastAPI(
    title="Wyt Trademark API",
    description="Developer-ready API for searching and retrieving structured trademark information across 20+ Lakh records.",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Routers
app.include_router(trademarks.router, prefix="/api/v1")
app.include_router(auth.router, prefix="/api/v1")
app.include_router(usage.router, prefix="/api/v1")
app.include_router(credits.router, prefix="/api/v1")

@app.get("/api/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "service": "Wyt Trademark API",
        "version": "1.0.0",
        "database": ACTIVE_DB_TYPE,
        "catalog_size": "20L+ records"
    }

@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to Wyt Trademark API. Visit /docs for interactive documentation.",
        "docs_url": "/docs",
        "health_check": "/api/health",
        "endpoints": {
            "trademarks": "/api/v1/trademarks",
            "dashboard_usage": "/api/v1/usage/dashboard",
            "api_keys": "/api/v1/auth/keys",
            "credits": "/api/v1/credits/purchase"
        }
    }
