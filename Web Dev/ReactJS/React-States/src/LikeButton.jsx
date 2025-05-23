import {useState} from "react";


export default function likeButton() {

    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={{color: "red"}}></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    )
}