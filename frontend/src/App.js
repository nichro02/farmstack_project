import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      Hello, world! This is FARM stack

      <div className="TodoList list-group-item justify-content-center align-items-center mx-auto">
        <h1 className='card text-white bg-primary mb-1' styleName='max-width: 20 rem'>Task Manager</h1>
        <h6 className='card text-white bg-primary mb-3'>FASTAPI - React - MongoDB</h6>
        <div className='card-body'></div>
        <h5 className='card text-white bg-dark mb-3'>Add Your Task Below</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn' placeholder='Title'/>
          <input className='mb-2 form-control desIn' placeholder='Description'/>
          <button className="btn btn-outline-primary mx-2 mb-3">
            Save Task
          </button>
        </span>
      </div>
      <div className='TodoList list-group-item justify-content-center align-items-center mx-auto mt-5 border-0'>
        <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
      </div>
    </div>
  );
}

export default App;
