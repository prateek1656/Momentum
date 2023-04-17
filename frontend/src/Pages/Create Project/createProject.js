import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./createProject.css";
import Sidebar from "../../components/sidebar";

const CreateProject = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to API endpoint
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
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
                <input id="fname" type="text" name="fname" required />
              </div>
              <div className="item">
                <label for="address2">
                 Project Image url<span>*</span>
                </label>
                <input id="address2" type='text' name="address2" required />
              </div> 
            </div>
              {/* <div className="item">
                <label for="address2">
                 Project Description<span>*</span>
                </label>
                <textarea rows={10} id="address2" type="text" name="address2" required />
              </div> */}
            {/* <div className="colums">
              <div className="item">
                <label for="zip">
                 Documents Url<span>*</span>
                </label>
                <input id="zip" type="url" name="zip" required />
              </div>
              <div className="item">
                <label for="zip">
                 Policies Url<span>*</span>
                </label>
                <input id="zip" type="url" name="zip" required />
              </div>
              <div className="item">
                <label for="state">
                  Contribution Type<span>*</span>
                </label>
                <input id="state" type="text" name="state" required />
              </div>
              <div className="item">
                <label for="zip">
                 Contribution Link<span>*</span>
                </label>
                <input id="zip" type="url" name="zip" required />
              </div>
              <div className="item">
                <label for="zip">
                 Contribution Goal<span>*</span>
                </label>
                <input id="zip" type="url" name="zip" required />
              </div>
              <div className="item">
                <label for="city">
                  End Date<span>*</span>
                </label>
                <input id="date" type="date" name="cdate" required />
              </div>
              <div className="item">
                <label for="eaddress">
                 Reward Type<span>*</span>
                </label>
                <input id="eaddress" type="text" name="eaddress" required />
              </div>
              <div className="item">
                <label for="eaddress">
                 Reward<span>*</span>
                </label>
                <input id="eaddress" type="text" name="eaddress" required />
              </div>
            </div> */}
            <div className="btn-block">
              <button type="submit" href="/">
                Submit
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CreateProject;
