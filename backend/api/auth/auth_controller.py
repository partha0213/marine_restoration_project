from fastapi import Depends, HTTPException, status
from backend.api.auth.auth_services import AuthService
from backend.models.user_model import UserInDB
from backend.utils.auth_utils import verify_password

class AuthController:
    def __init__(self):
        self.auth_service = AuthService()

    async def login(self, username: str, password: str):
        user = await self.auth_service.get_user_by_username(username)
        if user and verify_password(password, user.hashed_password):
            token = self.auth_service.create_access_token(user)
            return {"access_token": token, "token_type": "bearer"}
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )

    async def register(self, username: str, password: str):
        return await self.auth_service.create_user(username, password)
