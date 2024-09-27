from fastapi import APIRouter

router = APIRouter()

@router.get("/data")
async def get_pollution_data():
    return {"message": "Pollution data here!"}
