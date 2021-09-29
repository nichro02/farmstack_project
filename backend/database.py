#import Todo model from model file
from model import Todo

#MongoDB driver
import motor.motor_asyncio

#connect database.py to MongoDB
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

#create database
database = client.TodoList
collection = database.todo

#fetch single todo
async def fetch_one_todo(title):
    document = await collection.find_one({'title': title})

    return document

#fetch all todos
async def fetch_all_todos():
    todos = []
    cursor = collection.find({})

    #loop over documents in collection
    async for document in cursor:
        todos.append(Todo(**document))
    
    return todos

#create a todo
async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document

#update todo
async def update_todo(title, desc):
    await collection.update_one({'title': title}, {'$set':{
        'description': desc
    }})

    document = await collection.find_one({'title': title})

    return document

#delete todo
async def remove_todo(title):
    await collection.delete_one({'title': title})

    return True