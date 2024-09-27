import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

@pytest.fixture(scope="module")
def setup_db():
    # You can add code here to set up your test database if needed
    pass

def test_report_pollution(setup_db):
    data = {
        "location": "Test Location",
        "pollution_level": 2.5,
        "description": "Test pollution description"
    }
    response = client.post("/pollution/report", json=data)
    assert response.status_code == 200
    assert response.json()["location"] == "Test Location"

def test_get_pollution_data(setup_db):
    response = client.get("/pollution/data?location=Test Location")
    assert response.status_code == 200
    assert isinstance(response.json(), list)  # Check if the response is a list
