import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserEditForm({user, onEdit, onDelete, setActive, setActiveProfileTab}) {
    const [bio, setBio] = useState("");
    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const newInfo = {
            bio
        }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newInfo),
        })
        .then((r) => r.json())
        .then((user) =>
            onEdit(user),
            setActiveProfileTab(""),
            navigate("/profile")
            );
    }

    function handleDelete(){
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then(() => 
            onDelete(null),
            setActive("Home"),
            navigate("/")
            );
    }

    return(
        <>
        <h1>Edit</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="New Bio?"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              /><br/>
            <button type="submit">Submit Changes</button>
        </form>
        <h1>Delete</h1>
            <button className="delete" onClick={handleDelete}>Delete Profile</button>
        </>
    )
}

export default UserEditForm;