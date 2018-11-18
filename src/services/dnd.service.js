import { updateList } from './list.service'
/**
 * Service to handle drag and drop of the list
 * @param {*} state 
 * @param {*} result 
 * @return {*} the new state with the position of cards updated
 */
export const onDragEnd = (state, result) => {
  const {destination, source} = result
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
    try {
      updateList({id : startList.id, cards: newCards.map(card => card.id)}) 
      const newState = {
        ...state,
        [newList.id]: newList
      }
      return newState
    }
    catch(error){
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      return state
    }
  }
  
  // Moving from one list to another
  const startCards = Array.from(startList.cards)
  startCards.splice(source.index, 1)
  const finishCards = Array.from(finishList.cards)
  finishCards.splice(destination.index, 0, startList.cards[source.index])
  const newFinishList = {
    ...finishList,
    cards: finishCards
  }
  const newStartList = {
    ...startList,
    cards: startCards
  }
  try {
    updateList({id : startList.id, cards: startCards.map(card => card.id)}) 
    updateList({id : finishList.id, cards: finishCards.map(card => card.id)}) 
    const newState = {
      ...state,
      [newStartList.id]: newStartList,
      [newFinishList.id]: newFinishList
    }
    return newState
  }
  catch (error) {
    const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
    return state
  }
}