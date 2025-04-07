import {useState} from "react";
import './comment.css';
import CommentForm from "./commentsForm.jsx";

export default function comment() {
    let [comments, setComments] = useState([{
        username: "abhay singh",
        remarks: "this is a comment",
        rating: 5,
    }]);

    let addNewComment = (comment) => {
        setComments((currComment) => [...currComment, comment]);
        console.log("new comment added");
    }

    return (
        <>
        <div>
            <h3>All Comments</h3>

            {
                comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                    <span>Remarks: {comment.remarks}</span>
                    <br />
                    <span>Rating: {comment.rating}</span>
                    <br />
                    <span>-{comment.username}</span>
                </div>
    
                ))
            }

        </div>
        < CommentForm addNewComment={addNewComment}/>
        </>
    )
}