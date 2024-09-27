import os
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ServerSelectionTimeoutError
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MongoDBConfig:
    def __init__(self):
        # Get the MongoDB connection details from environment variables or use defaults
        self.MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
        self.DATABASE_NAME = os.getenv("DATABASE_NAME", "marine_db")

    def _connect(self):
        """Creates a MongoDB connection"""
        if not hasattr(self, "_client"):
            logger.info("Connecting to MongoDB...")
            try:
                self._client = AsyncIOMotorClient(self.MONGODB_URI, serverSelectionTimeoutMS=5000)
                # Check if the server is available
                self._client.server_info()
                logger.info("Successfully connected to MongoDB.")
            except ServerSelectionTimeoutError as e:
                logger.error(f"Failed to connect to MongoDB: {e}")
                raise e

    def get_database(self):
        """Fetches the database object after ensuring connection"""
        if not hasattr(self, "_db"):
            self._connect()
            self._db = self._client[self.DATABASE_NAME]
        return self._db

# Create a singleton instance
mongodb_config = MongoDBConfig()

# Export the constants
MONGO_URL = mongodb_config.MONGODB_URI
DATABASE_NAME = mongodb_config.DATABASE_NAME

def get_db():
    """Returns the database instance"""
    return mongodb_config.get_database()
