from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
import numpy as np
from PIL import Image
import base64
import io
import tensorflow as tf
from tensorflow.keras.applications.imagenet_utils import decode_predictions

from model import Photo
from model import Todo
from model import Predicts

from database import (
    #fetch_one_todo,
    fetch_all_todos,
    create_todo,
    create_predicts
)

# an HTTP-specific exception class  to generate exception information

app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def load_model():
    model = tf.keras.applications.MobileNetV2(weights="imagenet")
    print("Model loaded")
    return model

def predict(base64str):
    base64_img_bytes = base64str.encode('utf-8')
    base64bytes = base64.b64decode(base64_img_bytes)
    bytesObj = io.BytesIO(base64bytes)
    img = Image.open(bytesObj)
    img = np.asarray(img.resize((224, 224)))[..., :3]
    img = np.expand_dims(img, 0)
    img = img / 127.5 - 1.0
    result = decode_predictions(model.predict(img), 2)[0]
    response = []
    for i, res in enumerate(result):
        resp = {}
        resp["type"] = res[1]
        resp["confidence"] = f"{res[2]*100:0.2f} %"
        response.append(resp)
    return response

model = load_model()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/images")
async def get_todo():
    response = await fetch_all_todos()
    return response

# @app.get("/api/todo/{title}", response_model=Todo)
# async def get_todo_by_title(title):
#     response = await fetch_one_todo(title)
#     if response:
#         return response
#     raise HTTPException(404, f"There is no todo with the title {title}")

@app.post("/images/", response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.post("/predict", response_model=Predicts)
async def predict_api(photo: Photo):
    base64str = photo.base64str
    prediction = predict(base64str)
    prediction = prediction[0]
    predicts = prediction
    #return predicts
    response = await create_predicts(predicts)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")






