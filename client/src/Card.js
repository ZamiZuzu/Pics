import { useState, useEffect } from "react";
import "./Card.css";

function Card({url, title, id, user, setUser, delete_option, imageList, userid}) {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const [confused, setConfused] = useState(false) 

    function handleClick(e) {
        let x = e.target.name
        let a = {image_id: id, user_id: user.id}

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
        let a = {user_id: userid}
        const newList = imageList.filter( i => i.id !== id)

        fetch(`/images/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
        }).then((res) => res.json())
          .then((data) => 
            setUser(data),
            delete_option(newList)
        );
    }

    useEffect(() => {

        if(user){
            if ( user.likes.some( e => e.image_id === id)){
                setLiked(true)} else {setLiked(false)}
            if ( user.dislikes.some( e => e.image_id === id)){
                setDisliked(true)} else {setDisliked(false)}
            if ( user.favorites.some( e => e.image.id === id)){
                setFavorited(true)} else {setFavorited(false)}
            if ( user.reactions.some( e => e.image_id=== id && e.kind === "confused")){
                setConfused(true)} else {setConfused(false)}
        }
    }, [user, id])

  return (
        <div className="img-card">
            <img src={url} className="preview-img" alt={title}/>
            <h4>{title}</h4>
            {user ? 
            <div className="buttons">
                <button onClick={handleClick} className={liked ? "clicked" : "unclicked"} name="likes">Like</button>
                <button onClick={handleClick} className={disliked ? "clicked" : "unclicked"} name="dislikes">Dislike</button>
                <button onClick={handleClick} className={favorited ? "clicked" : "unclicked"} name="favorites">Fav</button>
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