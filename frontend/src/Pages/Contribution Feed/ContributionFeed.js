import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./ContributionFeed.css";
import Sidebar from "../../components/sidebar";
import ContributionCard from "../Contributions Card/contributionCard";

const ContributionFeed = (props) => {
    const [data, setdata] = useState([
        {
            title: "title 1",
            url: "https://image.freepik.com/free-vector/crowdfunding-app-interface-screens_23-2148614036.jpg",
            date: "1 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 40,
        },
        {
            title: "title 2",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            date: "4 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 70,
        },
        {
            title: "title 3",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            date: "4 April 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 80,
        },{
            title: "title 4",
            url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
            date: "4 March 2023",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
        },
    ])
  return (
    <>
    <div className="contentCard">
        <Sidebar/>
    <div className="cardContent">
        <div className="title">
          Contribution  
        </div>
        {data.map((item)=>{
          return (
            <ContributionCard title={item.title} url={item.url} desc={item.desc} date={item.date} completed={item.completed} contribution={true}/>
          )
        })}
    </div>
    </div>
    </>
  );
};

export default ContributionFeed;
