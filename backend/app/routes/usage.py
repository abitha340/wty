from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db, ACTIVE_DB_TYPE
from app.models import User, ApiKey, ApiUsageLog, Trademark
from app.schemas import DashboardStats, UsageLogResponse, ApiKeyResponse

router = APIRouter(prefix="/usage", tags=["Usage & Dashboard Stats"])

def mask_api_key(key_str: str) -> str:
    if not key_str:
        return "wyt_live_••••••••••••••••"
    if len(key_str) > 12:
        return f"wyt_live_••••••••••••{key_str[-4:]}"
    return "wyt_live_••••••••••••••••"

@router.get("/dashboard", response_model=DashboardStats)
def get_dashboard_metrics(db: Session = Depends(get_db)):
    user = db.query(User).first()
    if not user:
        credits_avail = 7519
        credits_used = 2481
        total_req = 2481
    else:
        credits_avail = user.credits_balance
        credits_used = user.credits_used
        total_req = user.total_requests

    active_keys_count = db.query(ApiKey).filter(ApiKey.status == "active").count()
    total_db_records = db.query(Trademark).count()

    recent_logs_objs = db.query(ApiUsageLog).order_by(ApiUsageLog.created_at.desc()).limit(20).all()
    keys_objs = db.query(ApiKey).order_by(ApiKey.created_at.desc()).all()

    return DashboardStats(
        credits_available=credits_avail,
        credits_used=credits_used,
        total_requests=total_req,
        active_api_keys=active_keys_count,
        total_records_in_db=total_db_records,
        total_catalog_estimate="20,00,000+ (20L+ Structured Records)",
        database_type=ACTIVE_DB_TYPE,
        recent_logs=[
            UsageLogResponse(
                id=log.id,
                endpoint=log.endpoint,
                query_params=log.query_params,
                search_mode=log.search_mode,
                credits_consumed=log.credits_consumed,
                status_code=log.status_code,
                response_time_ms=log.response_time_ms,
                created_at=log.created_at
            )
            for log in recent_logs_objs
        ],
        active_keys=[
            ApiKeyResponse(
                id=k.id,
                key=mask_api_key(k.key),  # Masked for security like OpenAI
                name=k.name,
                status=k.status,
                created_at=k.created_at,
                last_used_at=k.last_used_at
            )
            for k in keys_objs
        ]
    )
