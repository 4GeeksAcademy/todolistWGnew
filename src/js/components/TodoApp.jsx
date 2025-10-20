import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoFooter from "./TodoFooter";
import TodoTask from "./TodoTask";


const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {},[])
   
    return(
        <>
            <div className="mt-5">
            <TodoInput todos = {todos} setTodos = {setTodos}/>
            <TodoTask todos = {todos} setTodos = {setTodos}/>
            <TodoFooter todos = {todos} />
            </div>
        </>
    );
}

export default TodoApp;