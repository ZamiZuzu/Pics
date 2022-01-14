import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import NavBar from './NavBar';

function App() {
  // function navigate(e) {
  //   e.preventDefault();
  //   window.history.pushState(null, "", e.target.href);
  // }

  return (
    
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
