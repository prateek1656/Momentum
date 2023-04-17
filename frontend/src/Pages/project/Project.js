import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./Project.css";
import { getAllProjects,getUserAllProjects, getProject } from '../../contexts/FetchContext';
import Sidebar from "../../components/sidebar";

const Project = () => {
  
  const [allProjects, setAllProjects] = useState([])
  
    async function Projects() {
        const projects = await getAllProjects()
        setAllProjects(projects)
        console.log(projects);
    }
    
    
    async function UserProjects() {
        const project = await getUserAllProjects()
        // setAllProjects(projects)
        console.log(project);
    }
    
    async function ProjectInfo() {
      const id = "af5e62ff-db8f-11ed-a8b3-028836aad06a"
        const project_details = await getProject(id)
        // setAllProjects(projects)
        console.log(project_details);
    }
    
    useEffect(() => {
      // Projects()
      // UserProjects()
      ProjectInfo()
  }, []);
  
  return (
    <div className="content">
        <Sidebar/>
    <div className="cont">
    <div className="title">
     Your Projects
    </div>
    <div className="project">
      <div className="title">
      Project Title
      </div>
        <div className="buttons">
        <button type="button" className="button">Hold</button>
        <button type="button" className="button">Edit</button>
        <button type="button" className="button">Reward</button>
        </div>
    </div>
    <div className="projectComponent">
        <div className="details">
        <img src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
        <div className="otherDetails">
        <div className="heading">Title</div>
        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo doloremque voluptatem nobis exercitationem distinctio deserunt laboriosam fugiat vero ipsam voluptate atque, quas neque similique asperiores iure velit, explicabo sint natus autem? Ducimus cumque velit labore id modi ipsa corporis sapiente dolorum, nostrum dolores fugit voluptas officia rerum non assumenda pariatur voluptatibus? Ipsa accusamus quis quia, quasi ipsam accusantium reprehenderit. Reprehenderit labore iusto architecto dolorem sapiente atque est pariatur dolorum quia, eum voluptatum non nostrum omnis quam, voluptas enim beatae sunt recusandae accusamus accusantium repellat qui. Facilis, placeat, ipsa maiores unde qui, culpa ex neque temporibus provident adipisci illo voluptas.</div>
        </div>
        </div>
        <div className="dates">
          <div className="Amts">
          <div className="labels">Goal Amt</div>
          <div className="labels">Current Amt</div>
          </div>
          <div className="dateDetails">
          <div className="labels">Created At:1 March 2023</div>
          <div className="labels">Last Updated At:2 April 2023</div>
          <div className="labels">End Date:2 June 2023</div>
          </div>
        </div>
        <div className="contri">
        <div className="labels">Contribution Type</div>
        <div className="labels">Contribution Link</div>
        </div>
        <div className="labels">Reward Type</div>
    </div>
    </div>
    </div>
  );
};

export default Project;
