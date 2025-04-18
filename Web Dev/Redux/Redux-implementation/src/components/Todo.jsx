import { useSelector } from "react-redux";
import AddTask from "./AddTask.jsx";
import { deleteTodo, markAsDone} from "../features/todo/todoSlice.js";
import { useDispatch } from "react-redux";


export default function Todo () {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const hndleDel = (id) => {
        dispatch(deleteTodo(id));
    }

    const hndleTask = (id) => {
        dispatch(markAsDone(id));
    }   

    

    console.log(todos);
    return (
        <>
        <AddTask />    
        <hr />
        <h2>Todos</h2>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id} style={{textDecoration: todo.isDone ? "lineThrough" : "none"}}>
                        {todo.task}
                        <button onClick={() => hndleDel(todo.id)}>Delete</button>
                        <button onClick={() => hndleTask(todo.id)}>Mark as done</button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}