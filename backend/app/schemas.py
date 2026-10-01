from pydantic import BaseModel, Field
from typing import List, Optional, Any, Dict
from datetime import datetime

# --- Trademark Schemas ---
class TrademarkBase(BaseModel):
    application_number: str
    mark_name: str
    wordmark: str
    trademark_class: int
    goods_services_description: Optional[str] = None
    status: str
    status_category: str
    status_date: Optional[str] = None
    application_date: Optional[str] = None
    applicant_name: str
    country: str = "IN"
    proprietor_address: Optional[str] = None
    legal_entity_type: Optional[str] = None
    attorney_name: Optional[str] = None
    nice_classification_version: Optional[str] = "12th Edition"
    journal_number: Optional[str] = None
    journal_date: Optional[str] = None
    certificate_number: Optional[str] = None
    certificate_date: Optional[str] = None
    valid_upto_date: Optional[str] = None
    section_code: Optional[str] = None
    sub_status: Optional[str] = None
    condition_or_limitation: Optional[str] = None
    has_image: bool = False
    image_url: Optional[str] = None

class TrademarkResponse(TrademarkBase):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class TrademarkSearchMetadata(BaseModel):
    query: str
    search_mode: str
    execution_time_ms: float
    total_matching_records: int
    returned_records: int
    credits_deducted: int = 1
    remaining_credits: int
    api_rate_limit: str = "100 req/sec"
    catalog_source: str = "Wyt 20L+ Trademark Engine"

class TrademarkSearchResponse(BaseModel):
    metadata: TrademarkSearchMetadata
    results: List[TrademarkResponse]

# --- API Key Schemas ---
class ApiKeyCreate(BaseModel):
    name: str

class ApiKeyResponse(BaseModel):
    id: int
    key: str  # Masked format e.g. wyt_live_••••••••••••3a8b
    name: str
    status: str
    created_at: Optional[datetime] = None
    last_used_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ApiKeyCreatedResponse(BaseModel):
    id: int
    name: str
    status: str
    secret_key: str  # Raw key returned only once upon creation
    masked_key: str
    created_at: Optional[datetime] = None

# --- Usage & Dashboard Schemas ---
class UsageLogResponse(BaseModel):
    id: int
    endpoint: str
    query_params: Optional[str] = None
    search_mode: Optional[str] = None
    credits_consumed: int
    status_code: int
    response_time_ms: float
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class DashboardStats(BaseModel):
    credits_available: int
    credits_used: int
    total_requests: int
    active_api_keys: int
    total_records_in_db: int
    total_catalog_estimate: str
    database_type: str
    recent_logs: List[UsageLogResponse]
    active_keys: List[ApiKeyResponse]

class CreditPurchaseRequest(BaseModel):
    package_id: str
    amount: int
    package_name: str
