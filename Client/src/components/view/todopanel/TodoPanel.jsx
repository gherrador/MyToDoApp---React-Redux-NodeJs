import './todopanel.css'

export const TodoPanel = ({ props }) => {
    return (
        <div className='App'>
            <h1>Welcome, {props.user.user[0].name}</h1>
            <h4>Your Tasks</h4>
            {!props.todo.todos.length
                ? <div className="todo">
                    <div className="text">You dont have any ToDo</div>
                </div>
                : <div className="todos">
                    {props.todo.todos.map(todo => (
                        <div onClick={() => props.update(todo._id)} className={"todo " + (todo.complete ? "is-complete" : "")} key={todo._id}>
                            <div className="checkbox"></div>
                            <div className="text">{todo.text}</div>
                            <>
                                <button className="delete-todo" onClick={(evt) => props.deleteTodoOfList(todo._id, evt)}>x</button>
                            </>
                        </div>
                    ))}
                </div>
            }
            <div className="actions-todo-panel">
                <button className='button' onClick={() => props.deleteTodos()}>Delete All</button>
                <button className="button" onClick={() => props.closeSession()}>Close Session</button>
            </div>
            <div className="addPopup" onClick={() => props.setPopupActive(true)}>+</div>
            {props.popupActive ? (
                <div className="popup">
                    <div className="closePopup" onClick={() => props.setPopupActive(false)}>x</div>
                    <div className="content">
                        <h3>Add Task</h3>
                        <input type="text" className="add-todo-input" onKeyDown={props.addNew} onChange={(e) => props.setNewTodo(e.target.value)} />
                        <div className='button' onClick={props.addNew}>Create Task</div>
                    </div>
                </div>

            ) : ''}

        </div>
    )
}

