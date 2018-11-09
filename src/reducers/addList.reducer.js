
const addList = (state = {}, action) => {
    switch (action.type) {
        case 'HIDE_ADD_LIST':
            return {
                ...state,
                hidden: true
            }

        case 'SHOW_ADD_LIST':
            return {
                ...state,
                hidden: false
            }

        default:
            return state
        }
    }

export default addList
