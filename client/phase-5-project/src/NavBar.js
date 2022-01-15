import { Outlet, Link} from "react-router-dom";

function NavBar({onLogout, user}){

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(null));
  }

  const loggedOut = (<><Link to="/login">Login </Link><Link to="/signup">Signup </Link></>)
  const loggedIn = <Link to="/" onClick={handleLogout}>Logout </Link>

    return(
        <>
            <nav>
                  <Link to="/">Home </Link>
                  <Link to="/profile">Profile </Link>
                  {user ? loggedIn : loggedOut}
                  <Link to="/upload">Upload </Link>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;