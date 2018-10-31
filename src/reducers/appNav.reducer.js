
const appNav = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN':
            return {
                ...state,
                isOpen: action.payload
            }

        case 'CLOSE':
            return {
                ...state,
                isOpen: action.payload
            }

        default:
            return state
        }
    }

export default appNav
