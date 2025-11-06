from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: str
    role: str = "customer"
    password: str

class UserUpdate(BaseModel):
    name: str = None
    email: str = None
    role: Optional[str] = "customer"
    password: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str

    class Config:
        from_attributes = True