import axios from 'axios'
import API_URL from '../config'
import { setConnectedUser } from '../actions/home.action'

export const storeToken = (token) => {
    window.localStorage.setItem('prello_access_token', token)
}

export const getToken = () => {
    return window.localStorage.getItem('prello_access_token')
}

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

export const setTokenHeader = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
}

export const unsetTokenHeader = () => {
    axios.defaults.headers.common['Authorization'] = null
}

export const removeToken = () => {
    window.localStorage.removeItem('prello_access_token')
}

export const logout = () => {
    removeToken()
    deleteUserProfileLocalStorage()
    window.location = '/login'
}

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

const getLocalStorageUserProfile = () => {
    if (window.localStorage.getItem('prello_profile') !== undefined &&
    window.localStorage.getItem('prello_profile') !== null) {
        return JSON.parse(window.localStorage.getItem('prello_profile'))
    }
    else {
        return null
    } 
}

const storeUserProfileLocalStorage = (profile) => {
    window.localStorage.setItem('prello_profile', JSON.stringify(profile))
}

const deleteUserProfileLocalStorage = () => {
    window.localStorage.removeItem('prello_profile')
}

const fetchProfile = async() => {
    return await axios.get(`${API_URL}/users/current`)
}