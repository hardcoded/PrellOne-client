export const boardAdded = (board) => ({
    type: 'BOARD_ADDED',
    board
})  


/** drag and drop card action
 * 
 * @param {*} result contains {destination, source, draggableId}
 */
export const dndCard = result => ({
        ...result,
        type: 'DND_CARD_END',
    })

export const boardFetched = board =>({
    type: 'BOARD_FETCHED',
    payload: board
})