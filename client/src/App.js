import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Workouts from "./pages/Workouts";
import GymClass from "./pages/GymClass";
import Progress from "./pages/Progress";
import Bookings from "./pages/Bookings";
import "./pages/Home.css";
import "./pages/GymClass.css";
import "./pages/Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Navbar.css";




function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/workouts" element={<Workouts/>}/>
        <Route path="/gymclass" element={<GymClass/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/progress" element={<Progress/>}/>
        
      </Routes>
    </Router>
      
     
  )
}


export default App;
