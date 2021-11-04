import './App.css';
import { useState, useEffect} from 'react'
import TodoListView from './components/TodoListView'
import axios from 'axios'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {  
  //create variables to store todo list, title, and description
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  //useEffect to fetch all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
    .then(res => {
      setTodoList(res.data)
    })
  })

  //post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo', {'title': title, 'description': desc})
    .then(res => console.log(res))
  }
  
  return (
    <div className="App">
      Hello, world! This is FARM stack

      <div className=" TodoList list-group-item justify-content-center align-items-center mx-auto">
        <h1 className='card text-white bg-primary mb-1' stylename='max-width: 20 rem'>Task Manager</h1>
        <h6 className='card text-white bg-primary mb-3'>FASTAPI - React - MongoDB</h6>
        <div className='card-body'></div>
        <h5 className='card text-white bg-dark mb-3'>Add Your Task Below</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)}placeholder='Title'/>
          <input className='mb-2 form-control desIn' onChange={event => setDesc(event.target.value)}placeholder='Description'/>
          <button className="btn btn-outline-primary mx-2 mb-3" onClick={addTodoHandler}>
            Save Task
          </button>
        </span>
      </div>
      <div className='TodoList list-group-item justify-content-center align-items-center  mt-5 border-0 mx-auto'>
        <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
        <div className='align-items-center'>
          <TodoListView todoList={todoList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
