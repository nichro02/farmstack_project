import axios from 'axios'

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data))
    }

    return(
        <div className ="mx-auto">
            <p>
                <span>{props.todo.title}:</span>
                {props.todo.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)}
                className='btn btn-outline-danger my-2 mx-2'>x</button>
                
            </p>
        </div>
    )
}

export default TodoItem