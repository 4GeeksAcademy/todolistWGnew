 //Body of the Todo list app
 
 const TodoTask = ({todos, setTodos}) => {

    let renderTasks = todos.map(todo => {

        return(
            <li className = "list-item" key={todo.id}>
                <label>{todo.title}</label>
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