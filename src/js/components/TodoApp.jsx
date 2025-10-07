import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoFooter from "./TodoFooter";
import TodoTask from "./TodoTask";

//create the useState(s) here to poass down to the children components
let testTodos =[
    {

    id: 1,
    title:'Mow lawn',
},
    {
    id: 2,
    title:'Wash car',

},

]


const TodoApp = () => {
    const [todos, setTodos] = useState(testTodos);
   
    return(
        <>
            <TodoInput todos={todos} setTodos={setTodos}/>
            <TodoTask todos={todos} setTodos={setTodos}/>
            <TodoFooter todos= {todos} />
        </>
    );
}

export default TodoApp;