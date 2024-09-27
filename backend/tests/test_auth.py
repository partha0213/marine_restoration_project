import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_register():
    response = client.post("/auth/register", json={"username": "testuser", "password": "password"})
    assert response.status_code == 200

def test_login():
    client.post("/auth/register", json={"username": "testuser", "password": "password"})
    response = client.post("/auth/login", json={"username": "testuser", "password": "password"})
    assert response.status_code == 200
    assert "access_token" in response.json()
