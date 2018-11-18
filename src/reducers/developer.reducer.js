const login = (state = { clientID: null, clientSecret: null, waiting: null}, action) => {
    switch (action.type) {
        case 'DEV_REGISTER' :
            return {
                ...state,
                waiting: action.payload
            }
        case 'DEV_REGISTER_SUCCESS':
            return {
                ...state,
                clientID: action.payload.clientID,
                clientSecret: action.payload.clientSecret,
                waiting: null
            }
        case 'DEV_CLEAR':
            return {
                ...state,
                clientID: null,
                clientSecret: null,
                waiting: null
            }
        case 'DEV_REGISTER_FAIL':
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