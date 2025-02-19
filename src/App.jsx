/* eslint-disable no-unused-vars */
import React from 'react'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";

import {Route,Routes  } from "react-router-dom";




const App = () => {
  return (
    <>
   
  
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/bookings' element={<Bookings/>} /> 
        <Route path='/contact' element={<Contact/>} />        
        <Route path='/logout' element={<Logout/>} />        
      </Routes>
      
    </>
  )
}

export default App
