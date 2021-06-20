import React from 'react'
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md'
import ToDoForm from './ToDoForm';


function ToDo({todotasks, completeTodo, removeTodoTask, updateTodoTask}) {

    const [editTask, setEditTask] = useState({
        id: null,
        value: ''
    })

    const performUpdate = inputValue => {
        updateTodoTask(editTask.id, inputValue);
        setEditTask({
            id: null, 
            inputValue: ''
        });
    };

    if (editTask.id) {
        return (
            <div>
                <h4>Edit below: </h4>
                <ToDoForm edit={editTask} onSubmit={performUpdate}/>
            </div>
        )
    }

    return todotasks.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}> 
            <div key={todo.id}> { todo.text } </div>
                <div className="icons">
                    <IoClose className="delete-icon" onClick={() => removeTodoTask(todo.id)} />
                    <FaRegEdit className="edit-icon" onClick={() => setEditTask({id: todo.id, value: todo.text})} />
                    <MdDone className="complete-icon" onClick={() => completeTodo(todo.id)}/>
                </div>
        </div>
    ))
}

export default ToDo;
