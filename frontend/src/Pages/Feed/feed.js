import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./feed.css";
import Sidebar from "../../components/sidebar";
import { getAllProjects,  } from '../../contexts/FetchContext';


const Feed = () => {
    const [data, setdata] = useState([
        {
            title: "title 1",
            url: "https://image.freepik.com/free-vector/crowdfunding-app-interface-screens_23-2148614036.jpg",
            createdAt: "4 March 2023",
            updatedAt:"7 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
            reward: "E-certificates",
            type:"code"
        },
        {
            title: "title 2",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            createdAt: "4 March 2023",
            updatedAt:"7 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
            reward: "E-certificates",
            type:"code"
        },
        {
            title: "title 3",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            createdAt: "4 March 2023",
            updatedAt:"7 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
            reward: "E-certificates",
            type:"code"
        },{
            title: "title 4",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            createdAt: "4 March 2023",
            updatedAt:"7 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
            reward: "E-certificates",
            type:"code"
        },
    ])
    
    async function Projects() {
        const projects = await getAllProjects()
        console.log(projects);
    }
    
    useEffect(() => {
        // Projects()
        // UserProjects()
        Projects()
    }, []);
    
    const feedCard=(props)=>{
        return(
            <div className="feedCard">
        <img className="feedImage" src={props.url} alt="" />
        <div className="feedDetails">
            <div className="feedTitle">
                {props.title}
            </div>
            <div className="contriDesc">
               {props.desc}...
            </div>
            <div className="dates">
                <div className="created">Created At: {props.createdAt}</div>
                <div className="updated">Last Updated At: {props.updatedAt}</div>
            </div>
            <div className="moreDetails">
            <div type="button" class="feedBtn"> <a href={`/project/${props.project_id}`}>Check More</a></div>
            <div className="completed">
                {props.completed}% completed
            </div>
            </div>
            <div className="moreDetails">
            <div class="Reward">Reward: {props.reward}</div>
            <div className="contriType">Contribution Type: {props.type}</div>
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
        {data.map((item)=>{
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
