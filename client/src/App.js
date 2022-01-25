import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import UserFavorites from './UserFavorites';
import UserUploads from './UserUploads';
import UserStats from './UserStats';
import UserEditForm from './UserEditForm';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("Home")
  const [activeProfileTab, setActiveProfileTab] = useState("Home")

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
          <Route path="/" element={<NavBar onLogout={setUser} user={user} active={activeTab} setActive={setActiveTab}/>}>
            <Route index element={<Home user={user} setUser={setUser} />} />
            <Route path="profile" element={<Profile user={user} setActive={setActiveProfileTab} active={activeProfileTab} />}>
              <Route path="favorites" element={<UserFavorites user={user} setUser={setUser} />} />
              <Route path="uploads" element={<UserUploads user={user} setUser={setUser}/>} />
              <Route path="stats" element={<UserStats user={user}/>} />
              <Route path="edit" element={<UserEditForm user={user} onEdit={setUser} onDelete={setUser} setActive={setActiveTab} setActiveProfileTab={setActiveProfileTab} />} />
            </Route>
            <Route path="login" element={<Login onLogin={setUser} setActive={setActiveTab}/>} />
            <Route path="signup" element={<Signup onLogin={setUser} setActive={setActiveTab}/>} />
            <Route path="upload" element={<Upload user={user} onUpload={setUser} setActive={setActiveTab}/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
