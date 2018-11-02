const modalCard = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
        return {
            activeCard: action.cardId,
            isOpen: true
        }
    case 'CLOSE_MODAL':
        return {
            activeCard: undefined,
            isOpen: false
        }
    default: return state;
    }
}

export default modalCard