import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

function Signup({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([])
    
    let navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password,
            email
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
                    r.json().then(onLogin(user), navigate('/'));
                } else {
                    r.json().then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
                <br/>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
                <br/>
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                <br/>
            <button type="submit">Sign Up</button>
      </form>
    )
}

export default Signup;