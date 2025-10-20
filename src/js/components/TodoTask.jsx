 //Body of the Todo list app
 
 const TodoTask = ({todos, setTodos}) => {

    const deleteTask = (todoId) => {
        let updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    let renderTasks = todos.map(todo => {

        return(
            <li className = "list-item" key={todo.id}>
                <label>{todo.title}</label>
                <button 
                    className = "delete-task"
                    onClick={ () => {deleteTask(todo.id)}}
                >X</button>
            </li>
        );
    })


    return(
        <>
            <div className='main'>
                <ul className='todo-list'>
                    {todos.length !== 0 ? renderTasks : 'No Task. Add a task.'}
                    

                </ul>
            </div>
        </>
    );
}

export default TodoTask;