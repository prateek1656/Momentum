import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./Project.css";
import { getAllProjects,getUserAllProjects, getProject } from '../../contexts/FetchContext';
import Sidebar from "../../components/sidebar";

const Project = () => {
  const [Projectinfo, setProjectinfo] = useState('')

  // will extract the informatio of project when will provide it's id
    async function ProjectInfo() {
      console.log((window.location.pathname.split('/'))[2])
      const project= await getProject((window.location.pathname.split('/'))[2])
      setProjectinfo(project)
      console.log(project)
    }
    
    useEffect(() => {
      // Projects()
      // UserProjects()
      ProjectInfo()
  }, []);
  
  
  return (
    <>
    <div className="contentProject">
        <Sidebar/>
    <div className="contProject">
    <div className="titleProject">
     Your Project
    </div>
    <div className="projectProject">
      <div className="titleProject">
      {Projectinfo.name}
      </div>
        <div className="buttonsProject">
        <button type="button" class="buttonProject"><a href="/createProject">Create</a></button>
        <button type="button" class="buttonProject"><a href="/editProject">Edit</a></button>
        <button type="button" class="buttonProject">Hold</button>
        <button type="button" class="buttonProject">Reward</button>
        </div>
    </div>
    <div className="projectComponentProject">
        <div className="detailsProject">
        <img src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
        <div className="otherDetailsProject">
        <div class="headingProject">{Projectinfo.name}</div>
        <div class="descProject"> {Projectinfo.description}</div>
        </div>
        </div>
        <div className="datesProject">
          <div className="AmtsProject">
          <div class="labelsProject">Goal: {Projectinfo.contribution_goal} </div>
          {/* {(window.location.pathname.split('/'))[2]} */}
          {/* <div class="labelsProject">Current Amount: </div> */}
          </div>
          <div className="dateDetailsProject">
          <div class="labelsProject">Created At:{Projectinfo.created_at}</div>
          <div class="labelsProject">Last Updated At:{Projectinfo.updated_at}</div>
          <div class="labelsProject">End Date:{Projectinfo.end_date}</div>
          </div>
        </div>
        <div className="contriProject">
        <div class="labelsProject">Contribution Type:{Projectinfo.documents_url}</div>
        <div class="labelsProject">Contribution Link:{Projectinfo.contribution_link}</div>
        </div>
        <div class="labelsProject">Reward:{Projectinfo.reward_amount}</div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Project;