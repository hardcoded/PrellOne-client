import axios from 'axios'
import API_URL from '../config'

export const register = async (userName, firstName, lastName, email, password) => {
    try {
        const postBody = {
            username: userName,
            firstName: firstName,
            lastName: lastName,
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