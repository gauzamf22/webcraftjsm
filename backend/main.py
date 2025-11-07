from fastapi import FastAPI
import os
import sys

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.get("/debug")
def debug_info():
    return {
        "python_version": sys.version,
        "python_path": sys.path,
        "current_dir": os.getcwd(),
        "env_vars": list(os.environ.keys()),
        "files": os.listdir('.')
    }