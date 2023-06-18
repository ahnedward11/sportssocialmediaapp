import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import LikedPosts from "./pages/likedposts/Likedpost"
import Nba from "./pages/nba/Nba"

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router> 
      <Routes>  
      {/* <Route exact path="/"
        element={user ? <Home /> : <Register />}
        />
        <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Navigate to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Navigate to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route> */}
        <Route exact path="/" element={user ? <Home/> : <Register/>}  />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>

        <Route path="/nba" element={<Nba/>} exact />
        <Route path="/register" element={user ? <Navigate to ="/" /> :<Register/>} exact />
        <Route path="/profile/:username" element={user ? <Profile />:<Login />} exact />
        <Route path="/messenger" element={user ? <Messenger/> : <Login />} exact />
      </Routes>
    </Router>
)}

export default App;



{/* <Route path="/" element={user ? <Home/> : <Register/>} exact />
<Route path="/login" element={<Login/>} exact />
<Route path="/likedposts" element={<LikedPosts/>} exact />
<Route path="/nba" element={<Nba/>} exact />
<Route path="/register" element={user ? <Navigate to ="/" /> :<Register/>} exact />
<Route path="/profile/:username" element={!user ? <Navigate to="/" /> : <Profile />} exact />
<Route path="/messenger" element={<Messenger/>} exact /> */}