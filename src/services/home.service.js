import axios from 'axios'
import API_URL from '../config'
import { getToken } from './auth.service'

export const getUserBoards = async (username) => {
    const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
    try {
        const user = await axios.get(`${API_URL}/api/users/${username}/boards`)
        return user.data
    }
    catch (error) {
        throw error.response
    }
}

export const getUserTeams = async (username) => {
    const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
    try {
        const teams = await axios.get(`${API_URL}/api/users/${username}/teams`)
        return teams.data
    }
    catch (error) {
        throw error.response
    }
}