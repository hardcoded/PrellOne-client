const login = (state = { token: null , waiting: null, error: null}, action) => {
    switch (action.type) {
        case 'LOGGING_IN' :
            return {
                ...state,
                waiting: action.payload
            }
        case 'LOGGED_IN':
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username,
                error:null,
                waiting: null
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: action.payload,
                waiting: null
            }
        default :
            return state
    }
}

export default login