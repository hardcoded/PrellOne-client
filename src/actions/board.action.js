export const addList = (boardId, list) => ({
    type: 'ADD_LIST',
    boardId,
    list
})

/** drag and drop card action
 * 
 * @param {*} result contains {destination, source, draggableId}
 */
export const dndCard = result => ({
    type: 'DND_CARD',
    ...result
})


export const boardFetched = board =>({
    type: 'BOARD_FETCHED',
    payload: board
})