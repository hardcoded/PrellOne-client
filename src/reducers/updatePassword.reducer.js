const updatePassword = (state = { error: null }, action) => {
    switch (action.type) {
        case 'UPDATE_PWD_SUCCESS' :
            return {
                ...state
            }
        case 'UPDATE_PWD_ERROR' :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state
    }
}

export default updatePassword