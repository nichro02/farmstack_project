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
        Todos go here
      </div>
    </div>
  );
}

export default App;
