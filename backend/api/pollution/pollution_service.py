from backend.models.pollution_model import PollutionReport
from backend.utils.db import get_db

class PollutionService:
    async def report_pollution(self, data: dict):
        db = get_db()
        pollution_report = PollutionReport(**data)
        await db["pollution_reports"].insert_one(pollution_report.dict())
        return pollution_report

    async def fetch_pollution_data(self, location: str):
        db = get_db()
        return await db["pollution_reports"].find({"location": location}).to_list(100)
