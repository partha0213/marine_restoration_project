from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ServerSelectionTimeoutError

# Import routers from api submodules
from backend.api.auth.auth_routes import router as auth_router
from backend.api.dashboard.dashboard_routes import router as dashboard_router
from backend.api.pollution.pollution_routes import router as pollution_router

# Import MongoDB config
from backend.config.db_config import MONGO_URL, DATABASE_NAME

# Import utility functions
from backend.utils.db import init_db
from backend.utils.auth_utils import setup_logging

app = FastAPI()

# MongoDB Connection
client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]

@app.on_event("startup")
async def startup_event():
    try:
        # Setup logging service
        setup_logging()

        # Initialize MongoDB connection and test connection
        await client.server_info()
        print("Connected to MongoDB!")

        # Optionally, initialize the database or any collections
        await init_db(db)

    except ServerSelectionTimeoutError:
        print("Failed to connect to MongoDB")

@app.on_event("shutdown")
async def shutdown_event():
    # Close MongoDB connection
    client.close()

# Root route
@app.get("/")
async def read_root():
    return {"message": "Welcome to the MERP API"}

# Register routers for different API modules
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(dashboard_router, prefix="/dashboard", tags=["dashboard"])
app.include_router(pollution_router, prefix="/pollution", tags=["pollution"])
