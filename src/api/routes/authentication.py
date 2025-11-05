from fastapi import Depends, FastAPI, HTTPException, status, Request
from authlib.integrations.starlette_client import OAuth
from models.model import User
from dotenv import load_dotenv
import os
from database.db import get_db
from sqlalchemy.orm import Session
from models.model import User
from schemas.users import UserResponse

load_dotenv()

router = FastAPI()

oauth = OAuth()

# Google OAuth
oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid_configuration',
    client_kwargs={
        'scope': 'openid email profile'
    }
)

# redirect ke google
@router.get("/login/google")
async def login_google(request: Request):
    redirect_uri = request.url_for('auth_google')
    return await oauth.google.authorize_redirect(request, redirect_uri)

# dapet token dari google
@router.get("/auth/google")
async def auth_google(request: Request, db: Session = Depends(get_db), response_model = UserResponse):
    try: 
        token = await oauth.google.authorize_access_token(request)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Authentication failed: {str(e)}")

    user_info = token.get('userinfo')
    if not user_info:
        raise HTTPException(status_code=400, detail="Failed to get user info")  
    
    user = db.query(User).filter(User.oauth_id == user_info.sub).first()

    if not user: User(
        name=user_info.name,
        email=user_info.email,
        oauth_id=user_info.oauth_id,
        role=user_info.role
    )
    
    db.add(user)
    db.commit()
    db.refresh(user)

    return user
    