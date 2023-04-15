import React, { useState } from "react";
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import "./Project.css";
import Sidebar from "../components/sidebar";

const Project = () => {
  return (
    <>
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
        <button type="button" class="button">Hold</button>
        <button type="button" class="button">Edit</button>
        <button type="button" class="button">Reward</button>
        </div>
    </div>
    <div className="projectComponent">
        <div className="details">
        <img src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
        <div className="otherDetails">
        <div class="heading">Title</div>
        <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo doloremque voluptatem nobis exercitationem distinctio deserunt laboriosam fugiat vero ipsam voluptate atque, quas neque similique asperiores iure velit, explicabo sint natus autem? Ducimus cumque velit labore id modi ipsa corporis sapiente dolorum, nostrum dolores fugit voluptas officia rerum non assumenda pariatur voluptatibus? Ipsa accusamus quis quia, quasi ipsam accusantium reprehenderit. Reprehenderit labore iusto architecto dolorem sapiente atque est pariatur dolorum quia, eum voluptatum non nostrum omnis quam, voluptas enim beatae sunt recusandae accusamus accusantium repellat qui. Facilis, placeat, ipsa maiores unde qui, culpa ex neque temporibus provident adipisci illo voluptas.</div>
        </div>
        </div>
        <div className="dates">
          <div className="Amts">
          <div class="labels">Goal Amt</div>
          <div class="labels">Current Amt</div>
          </div>
          <div className="dateDetails">
          <div class="labels">Created At:1 March 2023</div>
          <div class="labels">Last Updated At:2 April 2023</div>
          <div class="labels">End Date:2 June 2023</div>
          </div>
        </div>
        <div className="contri">
        <div class="labels">Contribution Type</div>
        <div class="labels">Contribution Link</div>
        </div>
        <div class="labels">Reward Type</div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Project;
