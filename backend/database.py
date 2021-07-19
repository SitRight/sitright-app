import motor.motor_asyncio
from model import Todo

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.Main
user_collection = database.todo
predicts_collection = database.predicts

async def fetch_one_todo(title):
    document = await user_collection.find_one({"title": title})
    return document

async def fetch_all_todos():
    todos = []
    cursor = user_collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    result = await user_collection.insert_one(document)
    return document

async def create_prediction(predicts):
    document = predicts
    result = await predicts_collection.insert_many(document)
    return document