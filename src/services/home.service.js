import axios from 'axios'
import API_URL from '../config'

export const getUserBoards = async (username) => {
    try {
        const user = await axios.get(`${API_URL}/api/u/${username}/boards`)
        return user.data
    }
    catch (error) {
        throw error.response
    }
}