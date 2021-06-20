import React from 'react';
import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList() {

    // creating an array for the current tasks of the user (at the start there are 0 tasks present - hence useState has an empty array inside)
    const [todoTasks, setTodoTasks] = useState([]);

    // adding tasks  
    const addTodos = todoTask => {
        // escapes extra space characters between your words in the input
        if (!todoTask.text || /^\s*$/.test(todoTask.text)) {
            return;
        }

        const newTodos = [todoTask, ...todoTasks]
        setTodoTasks(newTodos);
    };


    const completeTodo = id => {
        let updatedTodoTasks = todoTasks.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodoTasks(updatedTodoTasks);
        console.log("done");
    };


    // for deleting a task user created
    const removeTodoTask = id => {
        const removetask = [...todoTasks].filter(todo => todo.id !== id);

        setTodoTasks(removetask);
    };


    // for editing a task 
    const updateTodoTask = (todoTaskId, newInput) => {
        if(!newInput.text || /^\s*$/.test(newInput.text)) {
            return;
        }

        setTodoTasks(previous => previous.map(item => (item.id === todoTaskId ? newInput : item)));
    }; 


    return (
        <>

        <div className="heading-container">
            <h1 className="main heading">To-Do App</h1>
            <hr />
            <p>“Plan your work for today and every day, then work your plan.” <br /> ~ MARGARET THATCHER </p>
        </div>
        <div className="content">
            <h3>Add your plan for today!</h3>
            <hr />
            <ToDoForm onSubmit={addTodos} /> 
            <ToDo todotasks ={todoTasks} completeTodo={completeTodo} removeTodoTask={removeTodoTask} updateTodoTask={updateTodoTask} />
        </div>

        <footer className="footer-design"> ~ Project by Nupur Jeswani </footer>
        
        </>
    )
}

export default ToDoList
