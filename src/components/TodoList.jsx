import Header from "./Header"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import EditTodoForm from "./EditTodoForm"

uuidv4();

function TodoList() {

    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    function toggleComplete(id){
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo => todo.id !==id))
    }

    function editTodo(id){
        setTodos(todos.map(todo => todo.id ===id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    function editTask(task, id){
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

    return (
        <>
            <div className="TodoWrapper">
                <Header />
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (

                        <TodoItem task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}
            </div>
        </>

    )

}

export default TodoList