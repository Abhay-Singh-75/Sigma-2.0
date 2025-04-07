import { useState } from "react";

export default function commentsForm ({addNewComment}) {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 1,
    });

    let hndleInpChnge = (event) => {

        setFormData((currData) => {
            return { ...currData, [event.target.name] : event.target.value}
        });
    }

    let hndleFormSub = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
    }

    return( 
        <div>
            <h4>Give a comment</h4>

            <form onSubmit={hndleFormSub}>
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={hndleInpChnge}/>
                <br /><br /><br />
                <textarea name="remarks" placeholder="Remarks" value={formData.remarks} onChange={hndleInpChnge}></textarea>
                <br /><br /><br />
                <input type="number" placeholder="rating" min={1} max={5} name="rating" value={formData.rating} onChange={hndleInpChnge}/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}