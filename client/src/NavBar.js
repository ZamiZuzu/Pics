import { Outlet, Link} from "react-router-dom";
import "./NavBar.css"

function NavBar({onLogout, user, active, setActive}){

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(null));
  }

  function handleClick(e) {
    setActive(e.target.text)
  }

  const loggedOut = (<><Link to="/login" onClick={handleClick} className={active === "Login" ? "active" : "inactive"}>Login</Link> <Link to="/signup" onClick={handleClick} className={active === "Signup" ? "active" : "inactive"}>Signup</Link></>)
  const loggedIn = (<><Link to="/profile" onClick={handleClick} className={active === "Profile" ? "active" : "inactive"}>Profile</Link> <Link to="/upload" onClick={handleClick} className={active === "Upload" ? "active" : "inactive"}>Upload</Link> <Link to="/" onClick={handleLogout}>Logout</Link></>)

    return(
        <>
            <nav className="top-nav">
                  <Link to="/" onClick={handleClick} className={active === "Home" ? "active" : "inactive"}>Home</Link>
                  {user ? loggedIn : loggedOut}
                  <h1>Pics</h1>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;