const loginLdap = (state = { token: null , waiting: null, error: null}, action) => {
    switch (action.type) {
        case 'LDAP_LOGGING_IN' :
            return {
                ...state,
                waiting: action.payload
            }
        case 'LDAP_LOGGED_IN':
            return {
                ...state,
                token: action.payload,
                error:null,
                waiting: null
            }
        case 'LDAP_LOGIN_FAILED':
            return {
                ...state,
                error: action.payload,
                waiting: null
            }
        default :
            return state
    }
}

export default loginLdap