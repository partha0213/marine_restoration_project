from jose import JWTError, jwt
from backend.models.user_model import UserInDB
from backend.utils.auth_utils import hash_password
from backend.utils.db import get_db
from datetime import datetime, timedelta

class AuthService:
    def __init__(self):
        self.secret_key = "YOUR_SECRET_KEY"  # Update with your actual secret key
        self.algorithm = "HS256"
        self.access_token_expire_minutes = 30

    async def get_user_by_username(self, username: str) -> UserInDB:
        db = get_db()
        user = await db["users"].find_one({"username": username})
        if user:
            return UserInDB(**user)
        return None

    async def create_user(self, username: str, password: str) -> UserInDB:
        hashed_password = hash_password(password)
        user = UserInDB(username=username, hashed_password=hashed_password)
        db = get_db()
        await db["users"].insert_one(user.dict())
        return user

    def create_access_token(self, user: UserInDB) -> str:
        expire = datetime.utcnow() + timedelta(minutes=self.access_token_expire_minutes)
        data = {"sub": user.username, "exp": expire}
        token = jwt.encode(data, self.secret_key, algorithm=self.algorithm)
        return token
