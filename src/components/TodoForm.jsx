import { useState } from "react"

function TodoForm(props){

    const [value, setValue] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        props.addTodo(value)

        setValue("")
    }

    return (
        <>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" value={value} placeholder="Enter Task" onChange={function(e){setValue(e.target.value)}} />
                <button type="submit" className="todo-btn">Add Task</button>
                
            </form>
        </>
    )
}

export default TodoForm