// import stuff from react library
import { createContext } from 'react';
// import stuff from other js libraries
import axios from 'axios';
// import app configs
import {API_HOST, API_VERSION} from "../configs/EnvVariables"
// import utils
import { setLocalValue, getLocalValue } from '../utils/AppLocalStorage.js';

// api needed:
// fetch
    //user details
    //user contribution
    // user projects
    // all projects 
// create
    // user
    // project
    // contribution
// update
    // user project



//> create Context
async function createUser(userData) {    
    let apiUrl=`${API_HOST}/${API_VERSION}/user`
    const option= {
        headers: {
        'Content-Type': 'application/json'
    }}
    const body =  JSON.stringify(userData)
    const res = await axios.post(
        apiUrl,
        body,
        option
    )
    if (res.status === 200) {
            const resJson = await res.data
            console.log(resJson);
            // callback();
            if (resJson.length > 0) { 
                return 'success'
            }
            return resJson
    }
}




const defaultUserState= {
  id: null,
  ciamId: null,
  firstName: null,
  lastName: null
};

const AppUserContext = createContext({
    appUser: defaultUserState,
    setAppUser: (user) => {},
    appUserSavedFeedItems: [],
    setAppUserSavedFeedItems: (savedFeedItems) => {},
});

export {
    createUser,
}

export default AppUserContext;