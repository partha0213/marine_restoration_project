from backend.api.dashboard.dashboard_service import DashboardService

class DashboardController:
    def __init__(self):
        self.dashboard_service = DashboardService()

    async def get_dashboard_data(self, user_id: str):
        return await self.dashboard_service.get_dashboard_data(user_id)
