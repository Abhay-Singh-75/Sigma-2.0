export default function Form() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Something" />
                <button>Submit</button>
            </form>
        </div>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
}