from fastapi import FastAPI
import sys
from pathlib import Path

# Add backend to path
sys.path.insert(0, str(Path(__file__).parent))

app = FastAPI()

@app.get("/")
def root():
    return {"status": "alive"}

@app.get("/test-imports")
def test_imports():
    errors = []
    
    # Test each import individually
    try:
        from schemas.users import UserCreate 
        errors.append({"schemas.users": "OK"})
    except Exception as e:
        errors.append({"schemas": str(e)})
    
    try:
        from src.schemas.users import UserCreate 
        errors.append({"src.schemas.users": "OK"})
    except Exception as e:
        errors.append({"schemas": str(e)})

    try:
        from api.routes.authentication import get_user_by_email
        errors.append({"routes": "OK"})
    except Exception as e:
        errors.append({"routes": str(e)})
    
    try:
        from database import db
        errors.append({"database": "OK"})
    except Exception as e:
        errors.append({"database": str(e)})
    
    try:
        from models import model
        errors.append({"models": "OK"})
    except Exception as e:
        errors.append({"models": str(e)})
    
    return {"import_tests": errors}