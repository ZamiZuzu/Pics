import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  return (
    
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar onLogout={setUser} user={user} />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/signup" element={<Signup onLogin={setUser}/>} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ReactDom.render(
//   <BrowserRouter>
//     <Route path='/'>
//       <Home />
//     </Route>
//     <Route path='/profile'>
//       <Profile />
//     </Route>
//     <Route path='/Login'>
//       <Login />
//     </Route>
//     <Route path='/signup'>
//       <Signup />
//     </Route>
//     <Route path='/upload'>
//       <Upload />
//     </Route>
//   </BrowserRouter>
// )

export default App;
