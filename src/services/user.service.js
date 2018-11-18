import axios from 'axios'
import API_URL from '../config'

/**
 * Modify the user password
 * @param {User} user 
 * @param {string} oldPwd old password  
 * @param {string} newPwd new password
 * @return the user updated
 */
export const updatePassword = async (user, oldPwd, newPwd) => {
    try {
        const update = await axios.put(`${API_URL}/api/users/${user}/password`, {
            oldPwd: oldPwd,
            newPwd: newPwd
        })
        return update.data
    }
    catch (error) {
        throw error.response
    }
}

/**
 * Modify user informations
 * @param {*} user 
 * @param {*} firstname 
 * @param {*} lastname 
 * @return user with the data updated
 */
export const updateInfo = async (user, firstname, lastname) => {
    try {
        const update = await axios.put(`${API_URL}/api/users/${user}`, {
            firstname: firstname,
            lastname: lastname
        })
        return update.data
    }
    catch (error) {
        throw error.response
    }
}
