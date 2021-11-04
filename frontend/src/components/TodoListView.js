//import TodoItem component
import TodoItem from './TodoItem'

export default function TodoListView(props) {
    const todoList = props.todoList
    const todoItems = todoList.map((todo, index) =>
        <TodoItem key={index} todo ={todo} />
    )

    return(
        <div className ="align-items-center">
            <ul className ="align-items-center">
               {todoItems} 
            </ul>
        </div>
    )
}