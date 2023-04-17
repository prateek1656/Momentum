import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./createProject.css";
import Sidebar from "../../components/sidebar";

const CreateProject = (props) => {
  return (
    <>
      <div className="contentCard">
        <Sidebar />
        <div className="cardContent">
          <div className="titleButton">
            <div className="createProject">Create Project</div>
            <div className="publish">Publish</div>
          </div>
          {/* <div className="projectForm"> */}
          {/* <form action="">
            <div className="headings">
                Project Title
            </div>
            <input type="text" name="projectTitle"/>
            <div className="headings">
                Project Image
            </div>
            <input type="image" name="Project Image"/>
            <div className="headings">
                Project Description
            </div>
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
            <div className="contributionDetails">
            <span className="headings">
                Contribution Type
            </span>
            <input type="text" name="Contribution Type"/>
            <span className="headings">
            Contribution Link
            </span>
            <input type='url' name="Contribution Link"/>
            </div>
            <span className="headings">
                Reward
            </span>
            <input type="text" name="Reward"/>
            <span className="headings">
                Date
            </span>
         <input type='date' name="date"/>
         </form> */}
          <form action="/">
            <div class="colums">
              <div class="item">
                <label for="fname">
                 Project Title<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" required />
              </div>
              <div class="item">
                <label for="address2">
                 Project Image<span>*</span>
                </label>
                <input id="address2" type='file' name="address2" required />
              </div> 
              </div>
              <div class="item">
                <label for="address2">
                 Project Description<span>*</span>
                </label>
                <textarea rows={10} id="address2" type="text" name="address2" required />
              </div>
            <div class="colums">
              <div class="item">
                <label for="state">
                  Contribution Type<span>*</span>
                </label>
                <input id="state" type="text" name="state" required />
              </div>
              <div class="item">
                <label for="zip">
                 Contribution Link<span>*</span>
                </label>
                <input id="zip" type="url" name="zip" required />
              </div>
              <div class="item">
                <label for="city">
                  Date<span>*</span>
                </label>
                <input id="date" type="date" name="cdate" required />
              </div>
              <div class="item">
                <label for="eaddress">
                 Reward<span>*</span>
                </label>
                <input id="eaddress" type="text" name="eaddress" required />
              </div>
            </div>
            <div class="btn-block">
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
