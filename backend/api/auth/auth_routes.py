from fastapi import APIRouter, Depends
from backend.api.auth.auth_controller import AuthController

router = APIRouter()
auth_controller = AuthController()

@router.post("/register")
async def register(username: str, password: str):
    return await auth_controller.register(username, password)

@router.post("/login")
async def login(username: str, password: str):
    return await auth_controller.login(username, password)
