import axios from 'axios'
import API_URL from '../config'

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