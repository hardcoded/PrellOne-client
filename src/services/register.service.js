import axios from 'axios'
import API_URL from '../config'


/**
 * create a new user
 * @param {string} username 
 * @param {string} firstname 
 * @param {string} lastname 
 * @param {string} email 
 * @param {string} password 
 * @return {*} the new user data
 */
export const register = async (username, firstname, lastname, email, password) => {
    try {
        const postBody = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
        const user = await axios.post(`${API_URL}/api/auth/register`, postBody)
        return user.data
    }
    catch (error) {
        throw error.response
    }
}