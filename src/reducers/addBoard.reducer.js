const addBoard = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL_CREATE_BOARD':
        return {
            modal: true
        }
    case 'CLOSE_MODAL_CREATE_BOARD':
        return {
            modal: false
        }
    default: return state;
    }
}

export default addBoard