import React, { useState } from "react";
import { useEffect, useLocation } from "react";
import "./ContributionFeed.css";
import Sidebar from "../../components/sidebar";
import {UserAuth} from "../../contexts/AppFirebaseContext"
import ContributionCard from "../Contributions Card/contributionCard";
import { getAppUser,getAllUserContribution } from '../../contexts/FetchContext';


const ContributionFeed = (props) => {
  const {user} = UserAuth()
    const [contri, setcontri] = useState([
        {
          name: "title 1",
          image_url: "https://image.freepik.com/free-vector/crowdfunding-app-interface-screens_23-2148614036.jpg",
          created_at: "1 March 2023",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 40,
            id:34
        },
        {
          name: "title 2",
          image_url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
          created_at: "4 March 2023",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 70,
        },
        {
          name: "title 3",
          image_url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
          created_at: "4 April 2023",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 80,
        },{
          name: "title 4",
          image_url: "https://i.pinimg.com/originals/6b/a2/ae/6ba2ae01358de18ce698b57f7bfb119f.png",
          created_at: "4 March 2023",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus illo quasi, temporibus, earum est distinctio harum porro voluptate sit numquam sequi, quos quis ullam magni veniam vitae aliquam aspernatur? Ex architecto veniam nostrum rem illo ullam harum. Vel sint quo explicabo natus omnis doloribus, nostrum consequuntur provident. Expedita, ut.",
            completed: 50,
        },
    ])
    
    // async function AllContributions() {
      // const user_details = await getAppUser(user.uid)
    //     const contrib = await getAllUserContribution(user_details)
    //     setcontri(contrib)
    //     // console.log(contrib);
    // }
    
    // useEffect(() => {
    //     // Projects()
    //     // UserProjects()
    //     AllContributions()
    // }, []);
  return (

    <div className="contentCard">
        <Sidebar/>
    <div className="cardContent">
        <div className="title">
          Contributions
        </div>
        <div className="contribution_feed">
        {contri.map((item)=>{
          return (
            <ContributionCard title={item.name} url={item.image_url} desc={item.description} date={item.created_at} completed={item.completed} contribution={true} project_id={item.id}/>
            )
          })}
    </div>
    </div>
    </div>

  );
};

export default ContributionFeed;
