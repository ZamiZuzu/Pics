import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            username,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((r) => r.json())
            .then((user) => 
                onLogin(user),
                navigate("/")
            );
    }
    

    return(
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
        <button type="submit">Login</button>
      </form>
    )
}

export default Login;