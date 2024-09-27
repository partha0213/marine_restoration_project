from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://127.0.0.1:8000/"  # Update with your actual MongoDB URL
DATABASE_NAME = "marine_db"

client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]

def get_db():
    return db

async def init_db(db):
    # Initialize collections or indexes if needed
    await db["users"].create_index("username", unique=True)
