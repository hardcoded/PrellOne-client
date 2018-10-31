
const addList = (state = {}, action) => {
    switch (action.type) {
        case 'HIDE':
            return {
                ...state,
                hidden: action.payload
            }

        case 'SHOW':
            return {
                ...state,
                hidden: action.payload
            }

        default:
            return state
        }
    }

export default addList
