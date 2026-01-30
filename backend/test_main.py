import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database import Base, get_db
from main import app

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

def test_signup(client):
    response = client.post("/api/auth/signup", json={"email": "test@example.com", "password": "password123"})
    assert response.status_code == 200
    assert response.json()["email"] == "test@example.com"

def test_signup_duplicate_email(client):
    client.post("/api/auth/signup", json={"email": "test@example.com", "password": "password123"})
    response = client.post("/api/auth/signup", json={"email": "test@example.com", "password": "password456"})
    assert response.status_code == 400

def test_signin(client):
    client.post("/api/auth/signup", json={"email": "test@example.com", "password": "password123"})
    response = client.post("/api/auth/signin", json={"email": "test@example.com", "password": "password123"})
    assert response.status_code == 200

def test_signin_invalid_credentials(client):
    response = client.post("/api/auth/signin", json={"email": "test@example.com", "password": "wrong"})
    assert response.status_code == 401

def test_get_me_unauthorized(client):
    response = client.get("/api/me")
    assert response.status_code == 401

def test_signout(client):
    response = client.post("/api/auth/signout")
    assert response.status_code == 200