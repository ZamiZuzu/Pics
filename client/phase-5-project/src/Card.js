import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Card.css";

function Card({url, title, id, user, setUser, delete_option, imageList}) {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const [confused, setConfused] = useState(false) 

    function handleClick(e) {
        let x = e.target.name
        let a = {image_id: id, user_id: user.id}
        

        // if (x === "likes"){
        //     setLiked((liked) => !liked)
        // }else if (x === "dislikes") {
        //     setDisliked((disliked) => !disliked)
        // }else if ( x === "favorites") {
        //     setFavorited((favorited) => !favorited)
        // }

        fetch(`/${x}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
        })
            .then((r) => r.json())
            .then((data) => setUser(data)
            );
    }    
    
    function handleReaction(e) {
        let x = e.target.name
        let a = {image_id: id, user_id: user.id, kind: x}

        if (x === "confused"){
            setConfused((confused) => !confused)
        }

        fetch(`/reactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
        })
            .then((r) => r.json())
            .then((data) => setUser(data)
            );
    }

    function handleDelete() {
        fetch(`/images/${id}`, {
            method: "DELETE",
            body: {user_id: delete_option}
        }).then(() => {
            const newList = imageList.filter( i => i.id !== id)
            delete_option(newList)
        });
    }

    useEffect(() => {

        if(user){
            if ( user.likes.some( e => e.image_id === id)){
                setLiked(true)} else {setLiked(false)}
            if ( user.dislikes.some( e => e.image_id === id)){
                setDisliked(true)} else {setDisliked(false)}
            if ( user.favorites.some( e => e.id === id)){
                setFavorited(true)} else {setFavorited(false)}
            if ( user.reactions.some( e => e.image_id=== id && e.kind === "confused")){
                setConfused(true)} else {setConfused(false)}
        }
    }, [user, id])

  return (
        <div className="img-card">
            <img src={url} className="preview-img" alt={title}/>
            {user ? 
            <div className="buttons">
                <button onClick={handleClick} className={liked ? "clicked" : "unclicked"} name="likes">Up</button>
                <button onClick={handleClick} className={disliked ? "clicked" : "unclicked"} name="dislikes">Down</button>
                <button onClick={handleClick} className={favorited ? "clicked" : "unclicked"} name="favorites">Star</button>
                <button onClick={handleReaction} className={confused ? "clicked" : "unclicked"} name="confused">?</button>
            </div>
            :  delete_option ? 
            <div className="buttons">
                <button onClick={handleDelete}>Delete</button>
            </div>
            :
            null
            }

        </div>
    )
}

export default Card;