const modal = (state = {}, action) => {
    switch (action.type) {

    case 'OPEN_MODAL':
            return {
                activeCard: action.cardId,
                modalCard: true
            }
        case 'CLOSE_MODAL':
        return {
            activeCard: undefined,
            modalCard: false
        }
    default: return state;
    }
}

export default modal