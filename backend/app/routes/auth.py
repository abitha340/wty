import secrets
import datetime
from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User, ApiKey, ApiUsageLog
from app.schemas import ApiKeyCreate, ApiKeyResponse, ApiKeyCreatedResponse
from typing import Optional, List

router = APIRouter(prefix="/auth", tags=["Authentication & API Keys"])

def mask_api_key(key_str: str) -> str:
    if not key_str:
        return "wyt_live_••••••••••••••••"
    if len(key_str) > 12:
        return f"wyt_live_••••••••••••{key_str[-4:]}"
    return "wyt_live_••••••••••••••••"

def verify_api_key_header(
    authorization: Optional[str] = Header(None),
    x_api_key: Optional[str] = Header(None),
    db: Session = Depends(get_db)
) -> ApiKey:
    token = None
    if authorization and authorization.startswith("Bearer "):
        token = authorization.replace("Bearer ", "").strip()
    elif x_api_key:
        token = x_api_key.strip()
    
    if not token:
        api_key = db.query(ApiKey).filter(ApiKey.status == "active").first()
        if not api_key:
            raise HTTPException(
                status_code=401,
                detail={
                    "error": {
                        "code": "UNAUTHORIZED",
                        "message": "Valid API key required. Pass 'Authorization: Bearer YOUR_API_KEY'",
                        "docs": "https://wyt.io/docs/authentication"
                    }
                }
            )
        token = api_key.key

    api_key_obj = db.query(ApiKey).filter(ApiKey.key == token, ApiKey.status == "active").first()
    if not api_key_obj:
        raise HTTPException(
            status_code=401,
            detail={
                "error": {
                    "code": "INVALID_API_KEY",
                    "message": "The provided API key is invalid or has been revoked.",
                    "docs": "https://wyt.io/docs/authentication"
                }
            }
        )

    user = api_key_obj.user
    if user.credits_balance < 1:
        raise HTTPException(
            status_code=402,
            detail={
                "error": {
                    "code": "INSUFFICIENT_CREDITS",
                    "message": "You have exhausted your API credits balance. Please top up your account.",
                    "credits_balance": user.credits_balance,
                    "purchase_url": "https://wyt.io/pricing"
                }
            }
        )

    user.credits_balance -= 1
    user.credits_used += 1
    user.total_requests += 1
    api_key_obj.last_used_at = datetime.datetime.utcnow()
    db.commit()

    return api_key_obj

@router.get("/keys", response_model=List[ApiKeyResponse])
def list_api_keys(db: Session = Depends(get_db)):
    keys = db.query(ApiKey).order_by(ApiKey.created_at.desc()).all()
    return [
        ApiKeyResponse(
            id=k.id,
            key=mask_api_key(k.key),
            name=k.name,
            status=k.status,
            created_at=k.created_at,
            last_used_at=k.last_used_at
        )
        for k in keys
    ]

@router.post("/keys", response_model=ApiKeyCreatedResponse)
def create_api_key(payload: ApiKeyCreate, db: Session = Depends(get_db)):
    user = db.query(User).first()
    if not user:
        raise HTTPException(status_code=404, detail="User account not found")

    new_key_str = f"wyt_live_{secrets.token_hex(16)}"
    api_key = ApiKey(
        user_id=user.id,
        key=new_key_str,
        name=payload.name,
        status="active"
    )
    db.add(api_key)
    db.commit()
    db.refresh(api_key)

    # Returns the secret_key ONLY ONCE upon creation like OpenAI / ChatGPT platform
    return ApiKeyCreatedResponse(
        id=api_key.id,
        name=api_key.name,
        status=api_key.status,
        secret_key=new_key_str,
        masked_key=mask_api_key(new_key_str),
        created_at=api_key.created_at
    )

@router.delete("/keys/{key_id}")
def revoke_api_key(key_id: int, db: Session = Depends(get_db)):
    api_key = db.query(ApiKey).filter(ApiKey.id == key_id).first()
    if not api_key:
        raise HTTPException(status_code=404, detail="API Key not found")
    api_key.status = "revoked"
    db.commit()
    return {"message": "API key revoked successfully", "key_id": key_id, "status": "revoked"}
