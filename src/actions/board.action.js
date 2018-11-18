
/**
 * 
 * @param {board} board new board added
 * @param {sting} idTeam id of the team, null if it's added from the home page
 * @param {[member]} members array of members of the new board
 * @return {action} BOARD_ADDED action and the payload {board,idTeam,members}
 */
export const boardAdded = (board, idTeam, members) => {
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
 * @param {action} DND_CARD_END action
 * 
 */
export const dndCard = result => ({
        ...result,
        type: 'DND_CARD_END',
    })

/**
 * 
 * @param {board} board board with all the data
 * @return {action} BOARD_FETCHED action and the payload with the board
 */
export const boardFetched = board =>({
    type: 'BOARD_FETCHED',
    payload: board
})

/**
 * 
 * @param {string} id id of the board
 * @return {action} HIDE_ADD_MEMBER_BOARD action and the payload with the id of the board
 */
export const hideAddMemberBoard = id => ({
    type: 'HIDE_ADD_MEMBER_BOARD',
    id
})

/**
 * 
 * @param {string} id id of the board
 * @return {action} SHOW_ADD_MEMBER_BOARD action and the payload with the id of the board
 * 
 */
export const showAddMemberBoard = id => ({
    type: 'SHOW_ADD_MEMBER_BOARD',
    id
})

/**
 * 
 * @param {string} id id of the board
 * @return {action} SHOW_ADD_TEAM_BOARD action and the payload with the id of the board
 * 
 */
export const hideAddTeamBoard = id => ({
    type: 'HIDE_ADD_TEAM_BOARD',
    id
})

/**
 * 
 * @param {string} id id of the board
 * @return {action} SHOW_ADD_TEAM_BOARD action and the payload with the id of the board
 * 
 */
export const showAddTeamBoard = id => ({
    type: 'SHOW_ADD_TEAM_BOARD',
    id
}) 

/**
 * 
 * @param {string} id id of the board
 * @param {Member} member the new member added
 * @return {action} MEMBER_ADDED_BOARD action and the payload with the id of the board and the member
 * 
 */
export const memberAddedBoard = (id, member) => ({
    type: 'MEMBER_ADDED_BOARD',
    id,
    member
})

/**
 * 
 * @param {string} id id of the board
 * @param {Team} team the new team added
 * @return {action} MEMBER_ADDED_BOARD action and the payload with the id of the board and the team
 */
export const teamAddedBoard = (id, team) => ({
    type: 'TEAM_ADDED_BOARD',
    id,
    team
})