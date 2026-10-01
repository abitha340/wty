import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "").strip()
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")
PORT = int(os.getenv("PORT", "8000"))
DEFAULT_USER_EMAIL = os.getenv("DEFAULT_USER_EMAIL", "dev@wyt.io")
