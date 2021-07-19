from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    description: str

class Input(BaseModel):
    base64str : str
