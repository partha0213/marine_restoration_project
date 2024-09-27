import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

@pytest.fixture(scope="module")
def setup_db():
    # You can add code here to set up your test database if needed
    pass

def test_get_dashboard_data(setup_db):
    # Assuming you have a user_id "testuser"
    response = client.get("/dashboard/testuser")
    assert response.status_code == 200
    assert "statistics" in response.json()  # Check if the statistics key exists in the response
