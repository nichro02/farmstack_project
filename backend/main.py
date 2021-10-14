from fastapi import FastAPI, HTTPException

from model import Todo

from fastapi.middleware.cors import CORSMiddleware

#App object
app = FastAPI()

#import functions
from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo
)

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"]
)

## test server is responding
@app.get('/')
def read_root():
    return {'Hello world'}

#ROUTES

#get all todos route
@app.get('/api/todo')
async def get_todo():
    response = await fetch_all_todos
    return response

#get todo by title route
@app.get('/api/todo{title}', response_model=Todo)
async def get_todo_by_id(title):
    response = await fetch_one_todo(title)
    
    if response:
        return response
    raise HTTPException(404, f'There is no todo with this title: {title}')

#post todo route
@app.post('/api/todo', response_model = Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

#update todo route
@app.put('/api/todo{title}', response_model=Todo)
async def put_todo(title:str, desc:str):
    response = await update_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f'There is no todo with this title: {title}')

#delete todo route
@app.delete('/api/todo{title}')
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return 'Todo successfully delete'
    raise HTTPException(f'There is no todo with this title: {title}')