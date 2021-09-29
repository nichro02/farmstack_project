#import Todo model from model file
from model import Todo

#MongoDB driver
import motor.motor_asyncio

#connect database.py to MongoDB
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

#create database
database = client.TodoList
collection = database.todo