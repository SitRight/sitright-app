from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from datetime import timedelta
from model import Photo, Todo, Predicts, Predictions, User, UserInDB, Token, TokenData
from fastapi.security import OAuth2PasswordRequestForm



from functions import (
    get_time,
    predict,
    run_prediction
)

from database import (
    fetch_all_predicts,
    fetch_all_todos,
    create_todo,
    create_predicts,
    create_predictions,
    get_current_active_user,
    get_current_user,
    authenticate_user,
    create_access_token,
    
)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ACCESS_TOKEN_EXPIRE_MINUTES = 30


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.get("/users/me/items/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]


@app.get("/")
async def read_root():
    return {"Main"}

@app.get("/api/todo")
async def get_todo():
    response = await fetch_all_todos()
    return response

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
    print(predicts)
    response = await create_predicts(predicts)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.post("/prediction", response_model=Predictions)
async def prediction_api(photo: Photo):
    base64str = photo.base64str
    prediction_handler = run_prediction(base64str)
    capture_time = get_time()
    prediction = {
        "result": prediction_handler,
        "time": capture_time
    }
    response = await create_predictions(prediction)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

