import axios from 'axios'
import API_URL from '../config'
import { getToken } from './auth.service'

export const updatePassword = async (user, oldPwd, newPwd) => {
    const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
    try {
        const update = await axios.put(`${API_URL}/api/users/${user}/password`, {
            oldPwd: oldPwd,
            newPwd: newPwd
        }, headers)
        return update.data
    }
    catch (error) {
        throw error.response
    }
}

export const updateInfo = async (user, firstname, lastname) => {
    const headers = {headers: { 'Authorization': `Bearer ${getToken()}`}}
    try {
        const update = await axios.put(`${API_URL}/api/users/${user}`, {
            firstname: firstname,
            lastname: lastname
        }, headers)
        return update.data
    }
    catch (error) {
        throw error.response
    }
}
