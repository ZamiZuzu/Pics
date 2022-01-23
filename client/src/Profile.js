import { Link, Outlet } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./Profile.css"

function Profile({user}){
    let name = user.username
    let bio = user.bio
    const [active, setActive] = useState("")

    function handleClick(e) {
        setActive(e.target.text)
      }

    return(
        <div className="profile">
            <h1>{name}</h1>
            <h2>{bio}</h2>
            <nav className="profile-nav">
                <Link to="/profile/favorites" onClick={handleClick} className={active === "Favorites" ? "active" : "inactive"}>Favorites</Link>
                <Link to="/profile/uploads" onClick={handleClick} className={active === "Uploads" ? "active" : "inactive"}>Uploads</Link>
                <Link to="/profile/stats" onClick={handleClick} className={active === "Statistics" ? "active" : "inactive"}>Statistics</Link>
                <Link to="/profile/edit" onClick={handleClick} className={active === "Edit" ? "active" : "inactive"}>Edit</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Profile;


