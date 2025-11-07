from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sys
from pathlib import Path
import traceback

sys.path.insert(0, str(Path(__file__).parent))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load routers with error handling
routers_config = [
    ("user", "src.api.routes.user"),
    ("kantin", "src.api.routes.kantin"),
    ("menuitem", "src.api.routes.menuitem"),
    ("order", "src.api.routes.order"),
    ("orderitem", "src.api.routes.orderitem"),
    ("authentication", "src.api.routes.authentication"),
]

for name, module_path in routers_config:
    try:
        module = __import__(module_path, fromlist=["router"])
        app.include_router(module.router, prefix="/api", tags=[name])
        print(f"✓ Loaded {name} router")
    except Exception as e:
        print(f"✗ Failed to load {name} router: {e}")
        traceback.print_exc()

@app.get("/")
async def root():
    return {"message": "vercel anjg, mending big cloud"}

@app.get("/debug")
async def debug():
    loaded_routes = [r.path for r in app.routes if r.path.startswith("/api")]
    return {
        "api_routes": loaded_routes,
        "total_routes": len(app.routes)
    }