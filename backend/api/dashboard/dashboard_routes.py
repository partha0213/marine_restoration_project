from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
async def get_status():
    return {"message": "Dashboard status OK!"}
