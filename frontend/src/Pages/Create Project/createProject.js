import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./createProject.css";
import Sidebar from "../../components/sidebar";
import {UserAuth} from "../../contexts/AppFirebaseContext"
import {createProject} from "../../contexts/CreateContext"
import { getAppUser,getAllUserContribution } from '../../contexts/FetchContext';

const CreateProject = (props) => {
  
  const {user} = UserAuth()
  
  async function HandleProjectCreate(data) {
    const user_details = await getAppUser(user.uid)
    if(user_details){
      console.log(user_details);
    data["created_by"] = user_details.id
    console.log(data);
    const createdProject = await createProject(data)
    console.log(createdProject);
    window.location.href = "/projects";
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to API endpoint
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    HandleProjectCreate(data)
  }
  
  return (
    <>
      <div className="contentCard">
        <Sidebar />
        <div className="cardContent">
          <div className="titleButton">
            <div className="createProject">Create Project</div>
            <div className="publish">Publish</div>
          </div>
          
          <form onSubmit={handleSubmit} className="projectForm" action="/">
            <div className="colums">
              <div className="item">
                <label for="fname">
                 Project Title<span>*</span>
                </label>
                <input id="fname" type="text" name="name" required />
              </div>
              <div className="item">
                <label for="address2">
                 Project Image url<span>*</span>
                </label>
                <input id="address2" type='text' name="image_url" required />
              </div> 
            </div>
               <div className="item">
                <label for="address2">
                 Project Description<span>*</span>
                </label>
                <textarea rows={10} id="address2" type="text" name="description" required />
              </div> 
            <div className="colums">
              <div className="item">
                <label for="zip">
                 Documents Url<span>*</span>
                </label>
                <input id="zip" type="url" name="documents_url" required />
              </div>
              <div className="item">
                <label for="zip">
                 Policies Url<span>*</span>
                </label>
                <input id="zip" type="url" name="policies_url" required />
              </div>
              <div className="item">
                <label for="state" htmlFor="contribution_type_id">
                  Contribution Type<span>*</span>
                </label>
                <br/>
              <select id="dropdown" name="contribution_type_id" >
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06x">Monetry</option>
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06y">Code</option>
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06z">Drive</option>
              </select>
              </div>
              <div className="item">
                <label for="zip">
                 Contribution Link<span>*</span>
                </label>
                <input id="zip" type="url" name="contribution_link" required />
              </div>
              <div className="item">
                <label for="zip">
                 Contribution Goal<span>*</span>
                </label>
                <input id="zip" type="integer" name="contribution_goal" required />
              </div>
              <div className="item">
                <label for="city">
                  End Date<span>*</span>
                </label>
                <input id="date" type="date" name="end_date" required />
              </div>
              <div className="item">
                <label for="eaddress"  htmlFor="reward_type_id">
                 Reward Type<span>*</span>
                </label>
                <br/>
                <select id="dropdown" name="reward_type_id" >
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06a">E certificate</option>
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06b">Equity</option>
                <option value="97d8f8ae-db60-11ed-a8b3-028836aad06c">Copouns</option>
              </select>
              </div>
              <div className="item">
                <label for="eaddress">
                 Reward<span>*</span>
                </label>
                <input id="eaddress" type="integer" name="reward_amount" required />
              </div>
            </div> 
            <div className="btn-block">
              <button href="/">
                Submit
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default CreateProject;
