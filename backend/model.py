from typing import Optional
from pydantic import BaseModel

class Todo(BaseModel):
    title : str

class Photo(BaseModel):
    base64str : str

class Predicts(BaseModel):
    type: str
    confidence: str

class Predictions(BaseModel):
    result: str
    time: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

class UserInDB(User):
    hashed_password: str

