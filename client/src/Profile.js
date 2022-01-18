import { Link, Outlet } from "react-router-dom";

function Profile({user}){
    let name = user.username
    let bio = user.bio

    return(
        <div>
            <h1>{name}</h1>
            <h2>{bio}</h2>
            <nav>
                <Link to="/profile/favorites">Favorites</Link>
                <Link to="/profile/uploads">Uploads</Link>
                <Link to="/profile/stats">Statistics</Link>
                <Link to="/profile/edit">Edit</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Profile;


