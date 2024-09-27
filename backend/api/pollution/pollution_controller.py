from backend.api.pollution.pollution_service import PollutionService

class PollutionController:
    def __init__(self):
        self.pollution_service = PollutionService()

    async def report_pollution(self, data: dict):
        return await self.pollution_service.report_pollution(data)

    async def get_pollution_data(self, location: str):
        return await self.pollution_service.fetch_pollution_data(location)
