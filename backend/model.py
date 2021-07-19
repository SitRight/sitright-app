from numpy.core.numeric import identity
from pydantic import BaseModel

class Todo(BaseModel):
    base64str : str

class Photo(BaseModel):
    base64str : str

class Predicts(BaseModel):
    type: str
    confidence: str

