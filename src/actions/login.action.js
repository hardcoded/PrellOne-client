
/**
 * @param {string} token the token of the user
 * @param {string} username the username of the user
 * @return {action} LOGGED_IN action and the payload composed with the token and the username
 */
export const loginSuccess = (token, username) => ({
    type: 'LOGGED_IN',
    payload: {
        token: token,
        username: username
    }
})

/**
 * @param {string} message the login message
 * @return {action} LOGGING_IN action and the payload  with the message
 */
export const login = (message) => ({
    type: 'LOGGING_IN',
    payload: message
})

/**
 * @param {*} error the login message
 * @return {action} LOGGIN_IN action and the payload  with the error
 */

export const loginFailed = (error) => ({
    type: 'LOGIN_FAILED',
    payload: error
})