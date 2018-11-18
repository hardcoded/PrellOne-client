/**
 * @param {string} token the token of the user
 * @return {action} LDAP_LOGGED_IN action and the payload  with the token 
 */
export const loginSuccess = (token) => ({
    type: 'LDAP_LOGGED_IN',
    payload: token
})

/**
 * @param {string} message the login message
 * @return {action} LDAP_LOGGING_IN action and the payload  with the message
 */
export const login = (message) => ({
    type: 'LDAP_LOGGING_IN',
    payload: message
})

/**
 * @param {*} error the login message
 * @return {action} LDAP_LOGIN_FAILED action and the payload  with the error
 */
export const loginFailed = (error) => ({
    type: 'LDAP_LOGIN_FAILED',
    payload: error
})