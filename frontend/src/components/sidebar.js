import React, { useState } from 'react'
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./styles.css";
import momentum_logo from './momentum.png'
const Sidebar=()=> {
   
  return (
  
<div className="sidenav">
    <img className = "logo" src={momentum_logo} alt="logo" />
    <div className="options">
  <a href="#">Feed</a>
  <a href="#">Contribution</a>
  <a href="#">Projects</a>
  <a href="#">Account</a>
  <a href="/login">Login</a>
  
    </div>
</div>

  )
}

export default Sidebar