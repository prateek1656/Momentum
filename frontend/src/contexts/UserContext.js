// import stuff from react library
import { createContext } from 'react';
// import stuff from other js libraries
import axios from 'axios';
// import app configs
import {API_HOST, API_VERSION} from "../configs/EnvVariables"
// import utils
import { setLocalValue, getLocalValue } from '../utils/AppLocalStorage.js';

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
                user = {
                    id: resUser.id,
                    ciamId: resUser.ciam_id,
                    firstName: resUser.first_name,
                    lastName: resUser.last_name
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
        user = {
            id: value.id,
            ciamId: value.ciamId,
            firstName: value.firstName,
            lastName: value.lastName
        }
    } else {
        const fetchedUser = await fetchAppUser(ciamId)
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

async function saveFeedItem (userId, feedItemId,  callback) {
    if (userId) {
        let apiUrl=`${API_HOST}/${API_VERSION}/user_saved_feed_item`
        const body = { user_id: userId, feed_item_id: feedItemId }
        const options = {
            headers: {'Content-Type': 'application/json'},
        }
        const res = await axios.post(
            apiUrl,
            body,
            options
        )
        if (res.status === 200) {
            const resJson = await res.data
            callback();
            if (resJson.length > 0) { 
                return 'success'
            }
        }
    }
}

async function removeFeedItem (userId, savedId, callback) {
    if (userId) {
        let apiUrl=`${API_HOST}/${API_VERSION}/user_saved_feed_item/${savedId}` 
        const options= {
            headers: {'Content-Type': 'application/json'},
        }
        const res = await axios.delete(
            apiUrl,
            options
        )
        if (res.status === 200) { 
            const resJson = await res.data 
            callback();
            if (resJson.length > 0) { 
                return 'success'
            }
        }
    }
}

async function _fetchSavedFeedItems(userId) {
    let savedFeedItems = []
    if (userId) {
        let apiUrl=`${API_HOST}/${API_VERSION}/user_saved_feed_item/search?limit=1000`
        const body = {user_id: userId}
        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        }
        const res = await fetch(apiUrl, options)
        if (res.status === 200) {
            const resJson = await res.json()
            if (resJson.length > 0) {
                resJson.map(
                    (item) => {
                        savedFeedItems.push(
                            {
                                id: item.id,
                                userId: item.user_id,
                                feedItemId: item.feed_item_id
                            }
                        )
                    }
                )
            }
        }
    }
    return savedFeedItems
}
async function getSavedFeedItems (userId, shouldForceUpdate = false) {
    let savedFeedItems= []
    let value= getLocalValue('appUserSavedFeedItems')
    if (value && !shouldForceUpdate) {
        // converting json object of array into array
        value = Object.values(value)
        savedFeedItems = value
    } else {
        const fetchedSavedFeedItems = await _fetchSavedFeedItems(userId)
        setLocalValue('appUserSavedFeedItems', fetchedSavedFeedItems)
        savedFeedItems = fetchedSavedFeedItems
    }
    return savedFeedItems
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
    saveFeedItem,
    removeFeedItem,
    getSavedFeedItems,
}

export default AppUserContext;