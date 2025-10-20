//TodoInput should do the following:
//We want the user to input a Todo item in a text box
//We want to validate the input: If the textbox is blank and the user click submit, it should
//  throw and alert to input something, otherwise we shoulkd append the task to the array
//We want to control the input by connecting the input tag with the UseState
//We want to have a button that will perform some operation to append the Todo to an array
// The array is the state variable-"todos"

import { useState } from "react";


const TodoInput = ({todos, setTodos}) => {

    const[newTask, setNewTask] = useState('');
    const[counter, setCounter] = useState(0);

    const addTask = () => {
        let newTodoObject = {
            id: counter,
            title: newTask,
        }

        setTodos([...todos, newTodoObject]);

        setCounter(counter + 1);
    }

    const checkTextBox = () => {
        let textBox = document.querySelector('.new-todo');
        if(textBox.value===""){
            alert("Please add a task");
        }
        else{
            addTask();
        }

    }

    return (
        
        <>
                        <h1>ToDos</h1>

            <input
                type='text'
                className='new-todo'
                placeholder='What needs to be done?'
                value={newTask}
                onChange= {event => setNewTask(event.target.value)}
            />
            <button
                className='add-task'
                onClick={checkTextBox}>Add Task
            </button>
        </>
    );
}

export default TodoInput; 