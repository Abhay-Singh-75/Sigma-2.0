import {useState} from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
        console.log(count);
    }

    return(
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}