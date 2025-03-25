
export default function Button () {

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <button onDoubleClick={handleDblClick} onMouseOver={handleHover}>Double click me</button>
        </div>
    );
}

// Adding Event listener in the button

function handleClick() {
    console.log("Button was clicked");
}

function handleDblClick() {
    console.log("button was double clicked");
}

function handleHover () {
    console.log("button was hover");
}