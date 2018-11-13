const updateInfo = (state = { error: null }, action) => {
    switch (action.type) {
        case 'UPDATE_INFO_SUCCESS' :
            return action.user
        case 'UPDATE_INFO_ERROR' :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state
    }
}

export default updateInfo