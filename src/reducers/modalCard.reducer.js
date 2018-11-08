const modalCard = (state = {edit:{}}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
        return {
            activeCard: action.cardId,
            isOpen: true,
            edit: {}
        }
    case 'CLOSE_MODAL':
        return {
            activeCard: undefined,
            isOpen: false,
            edit: {}
        }
    case 'TOGGLE_EDIT' :
        return {
            ...state,
            edit: {
                ...state.edit,
                [action.field]: !state.edit[action.field] 
            }
        }
    default: return state;
    }
}

export default modalCard