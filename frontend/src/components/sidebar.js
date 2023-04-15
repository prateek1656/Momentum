import React, { useState } from 'react'
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./styles.css";

const Sidebar=()=> {
   
  return (
    <>
  
<div className="sidenav">
<div className="logo">
    <img src="./" alt="logo" />
  </div>
  <a href="#">Feed</a>
  <a href="#">Contribution</a>
  <a href="#">Projects</a>
  <a href="#">Account</a>
</div>

</>
  )
}

export default Sidebar