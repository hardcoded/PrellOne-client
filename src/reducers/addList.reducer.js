
const addList = (state = {}, action) => {
    switch (action.type) {
        case 'HIDE_ADD_LIST':
            return {
                ...state,
                hidden: false
            }

        case 'SHOW_ADD_LIST':
            return {
                ...state,
                hidden: true
            }

        default:
            return state
        }
    }

export default addList
