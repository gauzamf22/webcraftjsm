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

# Import routers with error handling
routers_to_load = [
    ("user", "/api", ["user"]),
    ("kantin", "/api", ["kantin"]),
    ("menuitem", "/api", ["menuitem"]),
    ("order", "/api", ["order"]),
    ("orderitem", "/api", ["orderitem"]),
    ("authentication", "/api", ["authentication"]),
]

for module_name, prefix, tags in routers_to_load:
    try:
        module = __import__(f"src.api.routes.{module_name}", fromlist=["router"])
        app.include_router(module.router, prefix=prefix, tags=tags)
        print(f"✓ Loaded {module_name} router")
    except Exception as e:
        print(f"✗ Failed to load {module_name}: {e}")
        traceback.print_exc()

@app.get("/")
async def root():
    return {"message": "vercel anjg, mending big cloud"}

@app.get("/debug")
async def debug():
    return {
        "routes": [{"path": route.path, "name": route.name} for route in app.routes],
        "routers_loaded": len([r for r in app.routes if r.path != "/"]),
    }