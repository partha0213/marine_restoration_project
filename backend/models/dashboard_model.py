from pydantic import BaseModel

class Dashboard(BaseModel):
    user_id: str
    statistics: str  # Assuming it's stored as a JSON string
