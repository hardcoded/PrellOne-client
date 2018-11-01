const addBoard = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
            return {
                modal: true
            }
        case 'CLOSE_MODAL':
        return {
            modal: false
        }
    default: return state;
    }
}

export default addBoard