
export const boardAdded = (board, idTeam, members) => {
    console.clear()
    console.log(idTeam)
    console.log(members)
    return {
        type: 'BOARD_ADDED',
        board,
        idTeam,
        members
    }

}


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

export const hideAddMemberBoard = id => ({
    type: 'HIDE_ADD_MEMBER_BOARD',
    id
})

export const showAddMemberBoard = id => ({
    type: 'SHOW_ADD_MEMBER_BOARD',
    id
})

export const memberAddedBoard = (id, member) => ({
    type: 'MEMBER_ADDED_BOARD',
    id,
    member
})