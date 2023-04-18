import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./home.css";
import { getAllProjects,getUserAllProjects, getProject } from '../../contexts/FetchContext';
import Sidebar from "../../components/sidebar";

const Home = () => {
 
  return (
    <>
    {/* <div className="parent"> */}
     <div className="background">
        <button className="getStarted"><a href="/feed">Get Started</a></button>
     </div>
     {/* </div> */}
    </>
  );
};

export default Home;