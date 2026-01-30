# Authentication App

Authentication app with FastAPI backend and React frontend.

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
python main.py
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Generate TypeScript API Client (Optional)

```bash
# Install OpenAPI Generator CLI
npm install -g @openapitools/openapi-generator-cli

# Start backend server first
cd backend && uvicorn main:app --reload

# Generate TypeScript client from OpenAPI spec
cd frontend
openapi-generator-cli generate \
  -i http://localhost:8080/openapi.json \
  -g typescript-axios \
  -o src/api

# Use generated types in your code
# import { DefaultApi, UserCreate } from './api';
```

## API Endpoints

### Sign Up
```bash
curl -X POST "http://localhost:8080/api/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Sign In
```bash
curl -X POST "http://localhost:8080/api/auth/signin" \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Get Profile
```bash
curl -X GET "http://localhost:8080/api/me" \
  -b cookies.txt
```

### Sign Out
```bash
curl -X POST "http://localhost:8080/api/auth/signout" \
  -b cookies.txt
```

### OpenAPI Documentation
- Swagger UI: http://localhost:8080/docs
- OpenAPI JSON: http://localhost:8080/openapi.json

## Run Tests

```bash
cd backend
pytest test_main.py
```