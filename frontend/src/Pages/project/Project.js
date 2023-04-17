import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./Project.css";
import { getAllProjects,getUserAllProjects, getProject } from '../../contexts/FetchContext';
import Sidebar from "../../components/sidebar";

const Project = () => {
  const [allProjects, setAllProjects] = useState([])

  // will extract the informatio of project when will provide it's id
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
    <>
    <div className="contentProject">
        <Sidebar/>
    <div className="contProject">
    <div className="titleProject">
     Your Projects
    </div>
    <div className="projectProject">
      <div className="titleProject">
      Project Title
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
        <div class="headingProject">Title</div>
        <div class="descProject">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo doloremque voluptatem nobis exercitationem distinctio deserunt laboriosam fugiat vero ipsam voluptate atque, quas neque similique asperiores iure velit, explicabo sint natus autem? Ducimus cumque velit labore id modi ipsa corporis sapiente dolorum, nostrum dolores fugit voluptas officia rerum non assumenda pariatur voluptatibus? Ipsa accusamus quis quia, quasi ipsam accusantium reprehenderit. Reprehenderit labore iusto architecto dolorem sapiente atque est pariatur dolorum quia, eum voluptatum non nostrum omnis quam, voluptas enim beatae sunt recusandae accusamus accusantium repellat qui. Facilis, placeat, ipsa maiores unde qui, culpa ex neque temporibus provident adipisci illo voluptas.</div>
        </div>
        </div>
        <div className="datesProject">
          <div className="AmtsProject">
          <div class="labelsProject">Goal Amt</div>
          <div class="labelsProject">Current Amt</div>
          </div>
          <div className="dateDetailsProject">
          <div class="labelsProject">Created At:1 March 2023</div>
          <div class="labelsProject">Last Updated At:2 April 2023</div>
          <div class="labelsProject">End Date:2 June 2023</div>
          </div>
        </div>
        <div className="contriProject">
        <div class="labelsProject">Contribution Type</div>
        <div class="labelsProject">Contribution Link</div>
        </div>
        <div class="labelsProject">Reward Type</div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Project;