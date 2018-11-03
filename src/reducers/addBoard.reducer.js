const addBoard = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL_CREATE_BOARD':
        return {
            activeTeam: action.idTeam,
            modal: true
        }
    case 'CLOSE_MODAL_CREATE_BOARD':
        return {
            activeTeam: undefined,
            modal: false
        }
    default: return state;
    }
}

export default addBoard