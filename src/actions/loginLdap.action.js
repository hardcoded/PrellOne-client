export const loginSuccess = (token) => ({
    type: 'LDAP_LOGGED_IN',
    payload: token
})

export const login = (message) => ({
    type: 'LDAP_LOGGING_IN',
    payload: message
})

export const loginFailed = (error) => ({
    type: 'LDAP_LOGIN_FAILED',
    payload: error
})