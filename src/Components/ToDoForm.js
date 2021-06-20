import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

function ToDoForm(props) {
    // hook to handle the input user enters in the input field
    const [taskInput, setTaskInput] = useState(props.edit ? props.edit.value : '');

    // keeping focus on the input field of the form
    const InputFocus = useRef(null);
    useEffect(() => {
        InputFocus.current.focus();
    })


    // function to submit the input and add it to our todo list
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: nanoid(),
            text: taskInput, 
        });

        setTaskInput('');
    }

    
    return (
        <div>
            <form className="to-do-form" onSubmit={handleSubmit}>
                {props.edit ? 
                (
                    <>
                    <input type="text" placeholder="Add a Task" value={taskInput} className="to-do-task-editinput" onChange={e => setTaskInput(e.target.value) } ref={InputFocus} />
                    <button className="to-do-update-button"> Update Task </button> 
                    </>
                ) : 
                (
                    <>
                    <input type="text" placeholder="Add a Task" value={taskInput} className="to-do-task-addinput" onChange={e => setTaskInput(e.target.value) } ref={InputFocus} />
                    <button className="to-do-add-button"> Add Task </button>
                    </>
                )
                 
                }
            </form>
        </div>
    )
}

export default ToDoForm
