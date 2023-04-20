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
    //user details //!done
    //user all contributions
    // user projects
    // all projects 
    // a project
// create
    // user //!done
    // project
    // contribution
// update
    // user project




//> fetch
// to get the description of the user
async function fetchAppUser(userId) {
    let user  = null
    if (userId) {
        let apiUrl=`${API_HOST}/${API_VERSION}/user/search`
        const query = {query: {ciam_id: userId}}
        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query),
        }
        const res = await fetch(apiUrl, options)
        if (res.status === 200) {
            const resJson = await res.json()
            if (resJson.length > 0) {
                const resUser = resJson[0]
                console.log(resUser);
                user = {
                    id: resUser.id,
                    ciamId: resUser.ciam_id,
                    name: resUser.name,
                    email: resUser.email,
                    image_url: resUser.image_url,
                    description: resUser.description
                }
            }
        }
    }
    return user
}
async function getAppUser (ciamId) {    
    let user = null
    const value = getLocalValue('appUser')
    if (value) {
        console.log(value);
        user = {
            id: value.id,
            ciamId: value.ciam_id,
            name: value.name,
            email: value.email,
            image_url: value.image_url,
            description: value.description
        }
    } else {
        const fetchedUser = await fetchAppUser(ciamId)
        console.log(fetchedUser);
        if (fetchedUser) {
            user = {
                id: fetchedUser.id,
                ciamId: fetchedUser.ciamId,
                firstName: fetchedUser.firstName,
                lastName: fetchedUser.lastName
            }
        }
        if (user) {
            setLocalValue('appUser', user)
        }
    }
    if (user) {
        return user
    }
}


async function getAllUserContribution(userId) {
    console.log(userId);
    if (userId) {
        let apiUrl=`${API_HOST}/${API_VERSION}/contribution/search?includes[Projects]`
        const body = { user_id: userId}
        const options = {
            headers: {'Content-Type': 'application/json'},
        }
        console.log(body);
        const res = await axios.post(
            apiUrl,
            body,
            options
        )
        if (res.status === 200) {
            const resJson = await res.data
            if (resJson.length > 0) { 
                return resJson
            }
        }
    }
}

async function getAllProjects() {
        let apiUrl=`${API_HOST}/${API_VERSION}/project/search`
        const body = {}
        const options = {
            headers: {'Content-Type': 'application/json'},
        }
        console.log(body);
        const res = await axios.post(
            apiUrl,
            body,
            options
        )
        if (res.status === 200) {
            const resJson = await res.data
            console.log(resJson);
            if (resJson.length > 0) { 
                return resJson
            }
            
        }
}

async function getUserAllProjects(userId) {
    let apiUrl=`${API_HOST}/${API_VERSION}/project/search`
    const body = {user_id: userId}
    const options = {
        headers: {'Content-Type': 'application/json'},
    }
    console.log(body);
    const res = await axios.post(
        apiUrl,
        body,
        options
    )
    if (res.status === 200) {
        const resJson = await res.data
        console.log(resJson);
        if (resJson.length > 0) { 
            return resJson
        }
        
    }
}

async function getProject(project_id) {
    let apiUrl=`${API_HOST}/${API_VERSION}/project/${project_id}`
    // let apiUrl=`${API_HOST}/${API_VERSION}/project/search`
    const body = {id: project_id}
    const options = {
        headers: {'Content-Type': 'application/json'},
    }
    console.log(body);
    const res = await axios.get(
        apiUrl
    )
    if (res.status === 200) {
        const resJson = await res.data
        console.log(resJson);
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
    getAppUser,
    fetchAppUser,
    getAllUserContribution,
    getAllProjects,
    getUserAllProjects,
    getProject
}

export default AppUserContext;