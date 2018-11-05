const signIn = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return {
                ...state
            }
        default :
            return state
    }
}

export default signIn