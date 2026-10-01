import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Float, Boolean, Index
from sqlalchemy.orm import relationship
from app.database import Base

class Trademark(Base):
    __tablename__ = "trademarks"

    id = Column(Integer, primary_key=True, index=True)
    trademark_name = Column(String(255), nullable=False, index=True)
    application_number = Column(String(100), unique=True, nullable=False, index=True)
    trademark_number = Column(String(100), nullable=True, index=True)
    owner = Column(String(255), nullable=False, index=True)
    class_number = Column(Integer, nullable=False, index=True)
    status = Column(String(50), nullable=False, index=True)  # Registered, Pending, Objected, Opposed, Abandoned, Refused
    country = Column(String(100), default="India", index=True)
    jurisdiction = Column(String(255), default="IP India (Controller General of Patents, Designs and Trade Marks)")
    filing_date = Column(String(50), nullable=False)
    registration_date = Column(String(50), nullable=True)
    goods_services_description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    __table_args__ = (
        Index("idx_tm_name_search", "trademark_name"),
        Index("idx_tm_owner_search", "owner"),
        Index("idx_tm_class_status", "class_number", "status"),
    )


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False, default="Developer")
    credits_balance = Column(Integer, default=7519)
    credits_used = Column(Integer, default=2481)
    total_requests = Column(Integer, default=2481)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    api_keys = relationship("ApiKey", back_populates="user", cascade="all, delete-orphan")
    credit_transactions = relationship("CreditTransaction", back_populates="user", cascade="all, delete-orphan")


class ApiKey(Base):
    __tablename__ = "api_keys"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    key = Column(String(100), unique=True, nullable=False, index=True)
    name = Column(String(100), default="Production API Key")
    status = Column(String(20), default="active")  # active, revoked
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    last_used_at = Column(DateTime, nullable=True)

    user = relationship("User", back_populates="api_keys")
    usage_logs = relationship("ApiUsageLog", back_populates="api_key")


class ApiUsageLog(Base):
    __tablename__ = "api_usage_logs"

    id = Column(Integer, primary_key=True, index=True)
    api_key_id = Column(Integer, ForeignKey("api_keys.id"), nullable=True)
    endpoint = Column(String(255), nullable=False)
    query_params = Column(String(500), nullable=True)
    search_mode = Column(String(50), default="contains")
    credits_consumed = Column(Integer, default=1)
    status_code = Column(Integer, default=200)
    response_time_ms = Column(Float, default=14.2)
    ip_address = Column(String(50), default="127.0.0.1")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    api_key = relationship("ApiKey", back_populates="usage_logs")


class CreditTransaction(Base):
    __tablename__ = "credit_transactions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    amount = Column(Integer, nullable=False)
    transaction_type = Column(String(50), nullable=False)  # purchase, usage, bonus
    description = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="credit_transactions")
