import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import {UserAuth} from "../../contexts/AppFirebaseContext"
import "./contribution.css";
import Sidebar from "../../components/sidebar";
import { useParams } from "react-router-dom"
import { getAppUser,getProject } from '../../contexts/FetchContext';

const Contribution = () => {
  // const [project, setproject] = useState()
  const {user} = UserAuth()
  
  //   async function Contribution() {
  //     const { id } = useParams()
  //     console.log("t")
  //     const project= await getProject()
  //       // const user_details = await getAppUser(user.uid)
  //       // // console.log(user_details);
  //       // const contributions = await getAllUserContribution(user_details.id)
  //       // setAllContributions(contributions)
  //       // console.log(contributions);
  //   }
  
  const [project, setproject] = useState('')

  // will extract the informatio of project when will provide it's id
    async function ConInfo() {
      console.log((window.location.pathname.split('/'))[2])
      const proj= await getProject((window.location.pathname.split('/'))[2])
      setproject(proj)
      console.log(project)
    }
    
    useEffect(() => {
      // Projects()
      // UserProjects()
      ConInfo()
  }, []);
  
  return (
    <>
    <div className="contentContribution">
        <Sidebar/>
    <div className="cont">
    <div className="contribution">
    <div className="title">
        {project.name}
        </div>
        <div className="buttons">
        <button type="button" class="btn btn-dark btn1">Discuss</button>
        <button type="button" class="btn btn-dark"> <a style={{textDecoration:"none", color:"white"}} href={project.contribution_link}>Contribute</a></button>
        </div>
    </div>
    <div className="contributionComponent">
        <div className="details">
           
        <img src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
        
        <div className="otherDetails">
        <div className="labels"> End Date;{project.end_date}</div>
        <div className="labels">Reward: {project.reward_amount}</div>
        <div className="labels">Contribution Type: {project.documents_url}</div>
        <div className="labels">Contribution Link:  {project.contribution_link}</div>
        <div className="labels">Goal:  {project.contribution_goal}</div>
        </div>
        </div>
          <div className="contribelowImg">
          <div className="labels2">{project.name}</div>
          <div className="labels2">40% completed</div>
          </div>
        <div className="desc">
           {project.description}
        </div>
        <div className="contridateDetails">
          <div className="labels2">Last Updated At: {project.updated_at}</div>
          <div className="labels2">Created At: {project.created_at}</div>
          </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contribution;
