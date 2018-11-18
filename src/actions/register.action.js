/**
 * 
 * @param {string} username  username  of the new user  
 * @param {string} firstname first name of the new user
 * @param {string} lastname   lastname of the new user
 * @param {string} email    email of the new user
 * @param {string} password password of the new user
 * @return {action} SUBMIT_REGISTER action and the payload of the data with the new user
 */
export const submitRegister = (username, firstname, lastname, email, password) => ({
    type: 'SUBMIT_REGISTER',
    username,
    firstname,
    lastname,
    email,
    password
})

/**
 * @return {action} REGISTER_SUCCESS action
 */
export const registerSuccess = () => ({
    type: 'REGISTER_SUCCESS'
})

/**
 * @param {*} error the error 
 * @return {action} REGISTER_ERROR action and the payload with the error
 */
export const registerError = (error) => ({
    type: 'REGISTER_ERROR',
    payload: error
})