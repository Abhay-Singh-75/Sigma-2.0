import {useState} from "react";

export default function ToDo () {

    const [task, setTask] = useState([{
        id : uuidv4(),
        task : "Sample Task",
        isDone : false,
    }]);

    const hndleChnge = (event) => {
        setTask(event.target.value);
    }

    const onSubmit = () => {
        console.log(task);
        setTask("");
    }

    return(
        <div>
            <input type="text" placeholder="Enter the task" value={task} onChange={hndleChnge}/>
            <br /><br />
            <button type="submit" onClick={onSubmit}>Add Task</button>

            

        </div>
    )
}