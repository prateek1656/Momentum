import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./contribution.css";
import Sidebar from "../../components/sidebar";

const Contribution = () => {
  return (
    <>
    <div className="contentContribution">
        <Sidebar/>
    <div className="cont">
    <div className="title">
     Contribution
    </div>
    <div className="contribution">
    <div className="title">
        Contribution Project
        </div>
        <div className="buttons">
        <button type="button" class="btn btn-dark">My Work</button>
        </div>
    </div>
    <div className="contributionComponent">
        <div className="details">
           
        <img src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
        
        <div className="otherDetails">
        <div className="labels">End Date: 12 May 2023</div>
        <div className="labels">Reward: E-Certificate</div>
        <div className="labels">Contribution Type: Code</div>
        </div>
        </div>
          <div className="contribelowImg">
          <div className="labels2">My First Project</div>
          <div className="labels2">40% completed</div>
          </div>
        <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias et quibusdam aliquid incidunt suscipit nisi eaque cumque distinctio dolorum fuga est veritatis enim odio alias, vero soluta nemo necessitatibus. Exercitationem dolores quia asperiores fuga, ex, molestias debitis porro vero architecto explicabo id! Eligendi eaque quae facere nisi excepturi nostrum nam cum velit et corporis? Dolor praesentium harum nostrum optio modi. Dolores, ad? Ullam, ad amet consectetur, rem itaque nam eius enim natus nisi dolores inventore error. Ea nobis delectus, est aliquam aspernatur, commodi corporis cupiditate deserunt obcaecati aut aliquid, iusto nemo officia inventore? Veniam libero totam beatae expedita eos commodi!
        </div>
        <div className="contridateDetails">
          <div className="labels2">Last Updated At: 2 April 2023</div>
          <div className="labels2">Created At: 1 March 2023</div>
          </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contribution;
