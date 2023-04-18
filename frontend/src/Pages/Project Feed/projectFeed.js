import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./projectFeed.css";
import Sidebar from "../../components/sidebar";
import {UserAuth} from "../../contexts/AppFirebaseContext"

import ContributionCard from "../Contributions Card/contributionCard";
import { getUserAllProjects,getAppUser} from '../../contexts/FetchContext';
const ProjectFeed = (props) => {
  const {user} = UserAuth()
    const [allProject, setAllProjects] = useState([])
    async function UserProjects() {
      const user_details = await getAppUser(user.uid)
      const projects = await getUserAllProjects(user_details)
      setAllProjects(projects)
      // console.log(project);
  }
  
  useEffect(() => {
    UserProjects()
}, []);
  return (
    <>
    <div className="contentCard">
        <Sidebar/>
    <div className="cardContent">
        <div className="title">
         Your Projects
        </div>
        <div type="button" class="feedBtn"> <a href="/create">Create Project</a></div>
        {allProject.map((item)=>{
          return (
            <ContributionCard title={item.name} url={item.image_url} desc={item.description} date={item.created_at} completed={item.completed} project_id={item.id}/>
          )
        })}
    </div>
    </div>
    </>
  );
};

export default ProjectFeed;
