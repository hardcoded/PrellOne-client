const account = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_INFO_SUCCESS': 
            return {
                ...state
            }
        default:
            return state
    }
}

export default account