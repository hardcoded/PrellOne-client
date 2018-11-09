import axios from 'axios'
import API_URL from '../config'

export const storeToken = (token) => {
    window.localStorage.setItem('prello_access_token', token)
    setTokenHeader()
}

export const getToken = () => {
    return window.localStorage.getItem('prello_access_token')
}

export const isAuthenticated = () => {
    return (window.localStorage.getItem('prello_access_token') !== undefined &&
        window.localStorage.getItem('prello_access_token') !== null)
}

export const setTokenHeader = () => {
    axios.defaults.headers.common['authorization'] = `Bearer ${getToken()}`
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
    window.location = '/login'
}

export const login = async (email, password) => {
    try {
        const login = await axios.post(`${API_URL}/api/auth/login`, {
            email: email,
            password: password
        })
        return login.data
    }
    catch (error) {
        throw error.response
    }
}

export const register = async(firstName, lastName, username, email, password) => {
    try {
        const user = await axios.post(`${API_URL}/api/auth/register`, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        })
        return user.data
    }
    catch (error) {
        throw error
    }
}