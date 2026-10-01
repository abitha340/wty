from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User, CreditTransaction
from app.schemas import PurchaseCreditsRequest

router = APIRouter(prefix="/credits", tags=["Credits & Billing"])

@router.post("/purchase")
def purchase_credits(payload: PurchaseCreditsRequest, db: Session = Depends(get_db)):
    user = db.query(User).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user.credits_balance += payload.amount
    
    tx = CreditTransaction(
        user_id=user.id,
        amount=payload.amount,
        transaction_type="purchase",
        description=f"Purchased {payload.package_name} (+{payload.amount:,} API Credits)"
    )
    db.add(tx)
    db.commit()
    db.refresh(user)

    return {
        "success": True,
        "message": f"Successfully credited {payload.amount:,} credits to your account.",
        "credits_added": payload.amount,
        "new_balance": user.credits_balance,
        "package_id": payload.package_id
    }
