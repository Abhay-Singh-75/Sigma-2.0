import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"

export default function AddTask () {
    const [task, setTask] = useState("");

    const dispatch = useDispatch();


    const hndleChnge = (event) => {
        setTask(event.target.value);
    }

    const hndleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("")
    }

    return (
        <form onSubmit={hndleSubmit}>
            <input type="text" placeholder="Enter your task here" value={task} onChange={hndleChnge} />
            <br /><br />
            <button>Add Task</button>
        </form>
    )
}