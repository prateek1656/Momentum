import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./feed.css";
import Sidebar from "../../components/sidebar";
import { getAllProjects,  } from '../../contexts/FetchContext';


const Feed = () => {
    const [feed, setfeed] = useState([])
    
    async function Projects() {
        const feed = await getAllProjects()
        setfeed(feed)
        // console.log("this"+projects);
    }
    
    useEffect(() => {
        // Projects()
        // UserProjects()
        Projects()
    }, []);
    
    const feedCard=(props)=>{
        return(
            <div className="feedCard">
        <img className="feedImage" src={props.image_url} alt="" />
        <div className="feedDetails">
            <div className="feedTitle">
                {props.name}
            </div>
            <div className="contriDesc">
               {props.description}...
            </div>
            <div className="dates">
                <div className="feedcreated">Created At: {props.created_at}</div>
                <div className="updated">Last Updated At: {props.updated_at}</div>
            </div>
            <div className="moreDetails">
            <div type="button" class="feedBtn"> <a href={`/project/${props.id}`}>Check More</a></div>
            <div className="completed">
                {props.completed}% completed
            </div>
            </div>
            <div className="moreDetails">
            <div class="Reward">Reward: {props.reward_amount}</div>
            <div className="contriType">Contribution Goal: {props.contribution_goal}</div>
            </div>
        </div>
      </div>
        )
    }

  return (
    <>
    <div className="contentCard">
        <Sidebar/>
    <div className="cardContent">
        <div className="title">
        Feed
        </div>
        {feed.map((item)=>{
          return (
           feedCard(item)
          )
        })}
    </div>
    </div>
    </>
  );
};

export default Feed;
