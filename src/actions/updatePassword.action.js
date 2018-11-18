
/**
 * @return {action} UPDATE_PWD_SUCCESS 
 */
export const updatePwdSuccess = () => ({
    type: 'UPDATE_PWD_SUCCESS'
})

/**
 * @param {*} error error occured
 * @return {action} UPDATE_PWD_SUCCESS 
 */
export const updatePwdError = (error) => ({
    type: 'UPDATE_PWD_ERROR',
    payload: error
})