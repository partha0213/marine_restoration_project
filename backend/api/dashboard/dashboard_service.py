from backend.models.dashboard_model import Dashboard
from backend.utils.db import get_db

class DashboardService:
    async def get_dashboard_data(self, user_id: str):
        db = get_db()
        dashboard = await db["dashboards"].find_one({"user_id": user_id})
        if dashboard:
            return Dashboard(**dashboard)
        return None
