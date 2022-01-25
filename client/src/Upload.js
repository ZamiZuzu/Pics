import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css"


function Upload({user, onUpload, setActive}){
    const [selected_image, setSelectedImage] = useState(null)
    const [title, setTitle] = useState('')
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user_id',user.id )
        formData.append('title', title )
        formData.append('picture', selected_image)

        fetch("/images", {
            method: "POST",
            body: formData
          })
            .then((res) => res.json())
            .then((data) => 
              onUpload(data),
              setActive("Home"),
              navigate("/")
            )
        }

    return(
        <div className="upload">
            <h1>Upload</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={e => setTitle(e.target.value)}
                /><br/>
                <input type="file"
                accept="image/*"
                onChange={e => setSelectedImage(e.target.files[0])}
                /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Upload;