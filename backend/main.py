from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#App object
app = FastAPI()

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
    return 1

#get todo by id route
@app.get('/api/todo{id}')
async def get_todo_by_id(id):
    return {'Return a specific todo'}

#post todo route
@app.post('/api/todo')
async def post_todo(todo):
    return {'POST todo'}

#update todo route
@app.put('/api/todo{id}')
async def put_todo(id, data):
    return {'UPDATE todo'}

#delete todo route
@app.delete('/api/todo{id}')
async def delete_todo(id):
    return {'DELETE todo'}