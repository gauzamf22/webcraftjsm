from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Try just ONE router without error handling
from src.api.routes import user
app.include_router(user.router, prefix="/api", tags=["user"])

@app.get("/")
async def root():
    return {"message": "vercel anjg, mending big cloud"}