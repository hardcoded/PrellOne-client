
const appNav = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_NAVBAR':
            return {
                ...state,
                isOpen: true
            }

        case 'CLOSE_NAVBAR':
            return {
                ...state,
                isOpen: false
            }

        default:
            return state
        }
    }

export default appNav
