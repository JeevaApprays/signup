// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Profile from './Profile/Profile';
import Login  from './Login/Login';
import Register from './Register/Register';
import All from './All/All';
import Admin from './Admin/Admin';
import CartDetails from './CartDetails/CartDetails';
import UserCartDetails from './UserCartDetails/UserCartDetails'


const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Profile />} />
        <Route path='/all' element={<All/>} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path='/cartdetails' element={<CartDetails/>}/>
        <Route path='/usercartdetails' element={<UserCartDetails/>}/>
      </Routes>
    </Router>
  );
}
export default App;

