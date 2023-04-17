import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./editProject.css";
import Sidebar from "../../components/sidebar";

const CreateProject = (props) => {
    const data={
        title: "my title",
        url:"www.ndins",
        desc:"lorem50 dejned je dnke djke fck w3kn fdw3knkwndfk3wnfkdne3fn3nfn enfk3wmfd3mwkfmd3kwnfl3wfndlw3mfd3wk",
        type:"Code",
        link: "bsjbawjwsb",
        date:"1 march 2023", 
        reward: "e-certificate"
    }
    const [title, settitle] = useState(data.title)
    const [url, seturl] = useState(data.url)
    const [desc, setdesc] = useState(data.desc)
    const [type, settype] = useState(data.type)
    const [link, setlink] = useState(data.link)
    const [date, setdate] = useState(data.date)
    const [reward, setreward] = useState(data.reward)
  return (
    <>
      <div className="contentCard">
        <Sidebar />
        <div className="cardContent">
          <div className="titleButton">
            <div className="createProject">Edit Project</div>
            <div className="publish">Save</div>
          </div>
          <form action="/">
            <div class="colums">
              <div class="item">
                <label for="fname">
                 Project Title<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" value={title} required onChange={(e)=>{
                       settitle(e.target.value ) 
                }}/>
              </div>
              <div class="item">
                <label for="address2">
                 Project Image<span>*</span>
                </label>
                <input id="address2" type='url' name="address2"  value={url} onChange={(e)=>{
                       seturl(e.target.value ) 
                }} required />
              </div> 
              </div>
              <div class="item">
                <label for="address2">
                 Project Description<span>*</span>
                </label>
                <textarea rows={10} id="address2" type="text" value={desc} onChange={(e)=>{
                       setdesc(e.target.value ) 
                }} name="address2" required />
              </div>
            <div class="colums">
              <div class="item">
                <label for="state">
                  Contribution Type<span>*</span>
                </label>
                <input id="state" type="text" name="state"  value={type} onChange={(e)=>{
                       settype(e.target.value ) 
                }} required />
              </div>
              <div class="item">
                <label for="zip">
                 Contribution Link<span>*</span>
                </label>
                <input id="zip" type="url" name="zip"  value={link} onChange={(e)=>{
                       setlink(e.target.value ) 
                }} required />
              </div>
              <div class="item">
                <label for="city">
                  Date<span>*</span>
                </label>
                <input id="date" type="date" name="cdate"  value={date} onChange={(e)=>{
                       setdate(e.target.value ) 
                }} required />
              </div>
              <div class="item">
                <label for="eaddress">
                 Reward<span>*</span>
                </label>
                <input id="eaddress" type="text" name="eaddress"  value={reward} onChange={(e)=>{
                       setreward(e.target.value ) 
                }} required />
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
