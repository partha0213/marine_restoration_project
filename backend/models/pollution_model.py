from pydantic import BaseModel

class PollutionReport(BaseModel):
    location: str
    pollution_level: float
    description: str
