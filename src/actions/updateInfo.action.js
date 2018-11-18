/**
 * 
 * @param {User} user user to be updated
 * @return {action } UPDATE_INFO_SUCCESS action and the payload with the user
 */
export const updateInfoSuccess = (user) => ({
    type: 'UPDATE_INFO_SUCCESS',
    user
})

/**
 * @param {*} error error 
 * @return {action } UPDATE_INFO_ERROR action and the payload with the error
 * 
 */
export const updateInfoError = (error) => ({
    type: 'UPDATE_INFO_ERROR',
    payload: error
})