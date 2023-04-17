import React, { useState } from 'react'
// import {Link, NavLink}  from "react-router-dom";
import { useEffect, useLocation } from "react";
import {UserAuth} from "../contexts/AppFirebaseContext"
import {createUser} from "../contexts/CreateContext"
import {setLocalValue} from "../utils/AppLocalStorage"
import "./styles.css";
import momentum_logo from './momentum.png'
const Sidebar=()=> {
  const {user, logOut} = UserAuth()
  const [userInfo, setUserInfo] = useState(user)
  
  async function _handleUser(user) {
    console.log(user);
    if(user && user.displayName){
        let userObj= {
            name: user.displayName,
            image_url: user.photoURL,
            username: user.email.split("@")[0],
            email: user.email,
            description: "",
            first_login: user.metadata.creationTime,
            last_login: user.metadata.lastSignInTime,
            ciam_id: user.uid,
        }
        // if user signed UP then only creating a db entry
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
           const res =  await createUser(userObj)
           console.log(res);
           if(res){
            userObj["id"] = res.id
           }
        }
        setLocalValue("appUser",userObj)
    }
}
useEffect(()=>{
    _handleUser(user)
    setUserInfo(user)
},[user]) 
  
const handleSignOut = async () => {
  try{
      await logOut();
  }
  catch(error){
      console.log(error)
  }
}

return (
  
<div className="sidenav">
    <img className = "logo" src={momentum_logo} alt="logo" />
    <div className="options">
  <a href="/feed">Feed</a>
  <a href="/contributions">Contribution</a>
  <a href="/projects">Projects</a>
  <a href="/account">Account</a>
  <a href="/projects" onClick={handleSignOut}>Logout</a>
  
    </div>
</div>

  )
}

export default Sidebar