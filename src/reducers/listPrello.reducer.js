import demoData from '../components/demo-data'

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
    const newCardIds = Array.from(startList.cardIds)
    
    // Dragging inside same list
    if (startList === finishList){
        newCardIds.splice(source.index, 1) // remove dragged item from source
        newCardIds.splice(destination.index, 0, draggableId) // insert added card id
        const newList = {
            ...startList,
            cardIds: newCardIds
        }
       const newState = {
            ...state,
            [newList.id]: newList
        }
        return newState
    }
    
    // Moving from one list to another
    const startCardIds = Array.from(startList.cardIds)
    startCardIds.splice(source.index, 1)
    const newStartList = {
      ...startList,
      cardIds: startCardIds
    }
     const finishCardIds = Array.from(finishList.cardIds)
    finishCardIds.splice(destination.index, 0, draggableId)
    const newFinishList = {
      ...finishList,
      cardIds: finishCardIds
    }
    const newState = {
        ...state,
        [newStartList.id]: newStartList,
        [newFinishList.id]: newFinishList
    }
    return newState
}


const listPrello = (state = demoData.lists, action) => {
    switch (action.type) {
        case 'ADD_LIST' :
            return {
                ...state,
                [action.list.id]: action.list
            }
        
        case 'ADD_CARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    cardIds: [
                        ...state[action.id].cardIds,
                        action.card.id
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
        case 'DND_CARD':
            return onDragEnd(state, action)
        default:
            return state
    }
}

export default listPrello