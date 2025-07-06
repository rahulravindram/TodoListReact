
function TodoItem({task, toggleComplete, deleteTodo, editTodo}) {
    return (
        <>
            <div className="Todo">
                <p onClick={function(){toggleComplete(task.id)}} className = {`${task.completed ? 'completed': ''}`}>{task.task}</p>
                <div>
                    <button type="submit" className="todo-btn" onClick={() => editTodo(task.id)}>Edit</button>
                    <button type="submit" className="todo-btn" onClick={() => deleteTodo(task.id)}>Delete</button>
                </div>
            </div>
        </>

    )
}

export default TodoItem