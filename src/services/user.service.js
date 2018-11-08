import axios from 'axios'
import API_URL from '../config'

export const updatePassword = async (user, oldPwd, newPwd) => {
    try {
        const update = await axios.put(`${API_URL}/api/users/${user}/password}`, {
            oldPwd: oldPwd,
            newPwd: newPwd
        })
        return update.data
    }
    catch (error) {
        throw error.response
    }
}

