import axios from 'axios'
import API_URL from '../config'
import { setConnectedUser } from '../actions/home.action'

/**
 * Set the token of the user
 * @param {string} token user token
 * 
 */
export const storeToken = (token) => {
    window.localStorage.setItem('prello_access_token', token)
}

/**
 * @return {string} token of the user
 */
export const getToken = () => {
    return window.localStorage.getItem('prello_access_token')
}

/**
 * @return {boolean} true if the user is authenticated false if not
 */
export const isAuthenticated = () => {
    if (getToken()) {
        setTokenHeader()
        setUserProfile()
        return true
    } else {
        unsetTokenHeader()
        return false
    }
}

/**
 * set the user profile to the local storage
 */
export const setUserProfile = async() => {
    const localUserProfile = getLocalStorageUserProfile()
    if (localUserProfile) {
        setConnectedUser(localUserProfile)
    } 
    else {
        const profile = await fetchProfile()
        setConnectedUser(profile)
        storeUserProfileLocalStorage(profile)
    }
}

/**
 * update the user profile to the local storage
 * @param {user} userProfile user connected profile
 */
export const updateUserProfileLocalStorage = (userProfile) => {
    storeUserProfileLocalStorage(userProfile)
}

/**
 * set the tokenHeader
 */
export const setTokenHeader = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
}

/**
 * Unset the tokenHeader
 */
export const unsetTokenHeader = () => {
    axios.defaults.headers.common['Authorization'] = null
}

/**
 * Remove the token
 */
export const removeToken = () => {
    window.localStorage.removeItem('prello_access_token')
}

/**
 * Service to log out 
 */
export const logout = () => {
    removeToken()
    deleteUserProfileLocalStorage()
    window.location = '/login'
}

/**
 * 
 * @param {string} credential user information
 * @param {string} password  user password
 * @param {boolean} ldap true if you use ldap credential false if not
 * @return {*} the login data
 */
export const login = async (credential, password, ldap = false) => {
    const url = ldap ? `${API_URL}/api/auth/login/polytech` : `${API_URL}/api/auth/login`
    try {
        const login = await axios.post(url, {
            credential: credential,
            password: password
        })
        storeToken(login.data.token)
        storeUserProfileLocalStorage(login.data.user)
        return login.data
    }
    catch (error) {
        throw error.response
    }
}

/**
 * @param {string} firstname new user first name 
 * @param {string} lastname new user lastname
 * @param {string} username new user usersname firstname.name if not provided
 * @param {string} email    new user email
 * @param {string} password new user password
 * @return {*} new user data
 * 
 */
export const register = async (firstname, lastname, username, email, password) => {
    try {
        const user = await axios.post(`${API_URL}/api/auth/register`, {
            email: email,
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password
        })
        return user.data
    }
    catch (error) {
        throw error
    }
}

/**
 * @return {*} profile from the local storage
 */
const getLocalStorageUserProfile = () => {
    if (window.localStorage.getItem('prello_profile') !== undefined &&
    window.localStorage.getItem('prello_profile') !== null) {
        return JSON.parse(window.localStorage.getItem('prello_profile'))
    }
    else {
        return null
    } 
}

/**
 * Store profile in the store
 * @param {*} profile  profile
 */
const storeUserProfileLocalStorage = (profile) => {
    window.localStorage.setItem('prello_profile', JSON.stringify(profile))
}

/**
 * Remove profile from the store
 */
const deleteUserProfileLocalStorage = () => {
    window.localStorage.removeItem('prello_profile')
}

/**
 * Fetch  profile
 */
const fetchProfile = async() => {
    return await axios.get(`${API_URL}/users/current`)
}