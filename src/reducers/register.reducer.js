/**
 * Function to handle register action to modify store
 * @param {*} state 
 * @param {*} action 
 */
const register = (state = { error: null }, action) => {
    switch (action.type) {
        case 'SUBMIT_SIGN_UP' :
            return {
                ...state
            }
        case 'REGISTER_SUCCESS' :
            return {
                ...state
            }
        case 'REGISTER_ERROR' :
            return {
                ...state,
                error: action.payload,
                password: ''
            }
        default :
            return state
    }
}

export default register