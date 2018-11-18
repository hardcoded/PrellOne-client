import axios from 'axios'
import API_URL from '../config'

export const register = async (clientName, redirectUri) => {
    try {
        const postBody = {
            clientName: clientName,
            redirectUri: redirectUri
        }
        const client = await axios.post(`${API_URL}/api/oauth/register`, postBody)
        return client.data
    }
    catch (error) {
        throw error.response
    }
}