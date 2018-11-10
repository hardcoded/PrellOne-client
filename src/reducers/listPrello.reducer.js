const onDragEnd = (state, result) => {
    const {destination, source, draggableId} = result
     // Do nothing if there is no destination
    if (!destination) {
        return state
    }
     // Do nothing if draggable didn't change position
    if (
        destination.droppableId === source.draggableId &&
        destination.index === source.index
    ) {
        return state
    }

    const startList = state[source.droppableId]
    const finishList = state[destination.droppableId]
    const newCards = Array.from(startList.cards)
    
    // Dragging inside same list
    if (startList === finishList){
        newCards.splice(source.index, 1) // remove dragged item from source
        newCards.splice(destination.index, 0, startList.cards[source.index]) // insert added card id
        const newList = {
            ...startList,
            cards: newCards
        }
       const newState = {
            ...state,
            [newList.id]: newList
        }
        return newState
    }
    
    // Moving from one list to another
    const startCards = Array.from(startList.cards)
    startCards.splice(source.index, 1)
    const newStartList = {
      ...startList,
      cards: startCards
    }
    const finishCards = Array.from(finishList.cards)
    finishCards.splice(destination.index, 0, startList.cards[source.index])
    const newFinishList = {
      ...finishList,
      cards: finishCards
    }
    const newState = {
        ...state,
        [newStartList.id]: newStartList,
        [newFinishList.id]: newFinishList
    }
    return newState
}


const listPrello = (state = {}, action) => {
    switch (action.type) {
        case 'BOARD_FETCHED':
            return action.payload.lists.reduce((map, list) => {
                map[list.id] = list;
                return map;
            }, {});
        case 'LISTS_LOAD_FAILED':
            return state
            
        case 'LIST_ADDED' :
            return {
                ...state,
                [action.list.id]: action.list
            }
        
        case 'CARD_ADDED':
            return {
                ...state,
                [action.card.list]: {
                    ...state[action.card.list],
                    cards: [
                        ...state[action.card.list].cards,
                        action.card
                    ]
                }
            }

        case 'CARD_ADDED_SUCCESS':
            console.log("marche coté liste")
            return {
                ...state,
                [action.card.list]: {
                    ...state[action.card.list],
                    cards: [
                        ...state[action.card.list].cards.filter(card => card.id != "idTemp"),
                        action.card
                    ]
                }
            }
        case 'UPDATE_LIST':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    title: action.title
                }
            }

        case 'SHOW_ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addCard: true
                }
            }
        case 'HIDE_ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addCard: false
                }
            }
        case 'DND_CARD_END':
            return onDragEnd(state, action)
        default:
            return state
    }
}

export default listPrello