import {useState,} from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Signup({setActive}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    
    let navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password
        }
        fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((r) =>{
                if (r.ok) {
                    r.json().then(navigate('/login'),
                    setActive("Login"));
                }
            })
    }

    return(
        <div className="login">
            <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
            {/* <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <br/> */}
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
            <button type="submit">Sign Up</button>
      </form>
                </div>
    )
}

export default Signup;