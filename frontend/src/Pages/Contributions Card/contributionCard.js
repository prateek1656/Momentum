import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./contributionCard.css";
import Sidebar from "../../components/sidebar";

const ContributionCard = (props) => {
  return (
    <>
      <div className="contriCard">
        <img className="contriImage" src={props.url}alt="" />
        <div className="contriDetails">
            <div className="titleDate">
            <div className="contriTitle">
                {props.title}
            </div>
            <div className="completed">
                Created At: {props.date}
            </div>
            </div>
            <div className="contriDesc">
               {props.desc}...
            </div>
            <div className="linkButton">
            <div type="button" class="contriBtn"><a href={props.contribution?`/project/${props.project_id}`:`/projectDetails`}>Check More</a></div>
            <div className="completed">
                {props.completed}% completed
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContributionCard;
