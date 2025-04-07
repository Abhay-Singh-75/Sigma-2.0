import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function todoList () {

    let [Todos, setTodo] = useState([{task: "Sample-Task", id: uuidv4(), done: false}]);

    // mark: new method for taking the value from the input by using the useState
    let [newTask, setNewTask] = useState("");

    // Note: Add Task
    let addTask = () => {
        setTodo((prevTodo) => {
            return [...prevTodo, {task: newTask, id: uuidv4(), done: false}];
        });
        // setNewTask(""); note: this feature is not working.
        document.querySelector("input").value = "";
    }

    let updateValue = (event) => {
        setNewTask(event.target.value);
    }

    // Note: Delete Task
    let deleteTask = (id) => {
        setTodo((prevTodo) => {
            return prevTodo.filter((todo) => todo.id != id);
        });
    }

    // note: Update Task
    let upperCaseAll = () => {
        setTodo((Todos) => (
            Todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        ))
    }

    // note: updating one in an array
    let updateOne = (id) => {

        setTodo((Todos) => (

            Todos.map((todo) => {

                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.style.textDecoration = "lineThrough",
                    }
                }
                else{
                    return todo;
                }
            })
        ))
    }

    let markOne = (id) => {

        setTodo((Todos) => (
            Todos.map((todo) => {
            })
        ))
    }

    return (
        <div>
            <h3>Todo List</h3>

            <input type="text " placeholder="Enter Task" onChange={updateValue}/>
            <br /><br />
            <button onClick={addTask}>Add Task</button>
            <br /><br /><hr />

            <h5>Todo Tasks: </h5>
            <ul>
                {
                    Todos.map((todo) => {
                        return <li key={todo.id}>
                            <span>{todo.task}</span>
                            <button onClick={() => deleteTask(todo.id)}>delete</button>
                            <button onClick={() => updateOne(todo.id)}>UpperCase</button>
                            <button>Mark as Done</button>
                        </li>
                    })
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button>Mark All task as done</button>
        </div>
    );
}