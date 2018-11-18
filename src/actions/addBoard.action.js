
/**
 *
 * @param {string} idTeam id of the team
 * @return {action} action 'OPEN_MODAL_CREATE_BOARD' and payload with idTeam
 */
export const openModalCreateBoard = (idTeam) => ({
    type: 'OPEN_MODAL_CREATE_BOARD',
    idTeam
})

/**
 * 
 * @return {action} action 'OPEN_MODAL_CREATE_BOARD' and payload with idTeam
 */
export const closeModalCreateBoard = () => ({
    type: 'CLOSE_MODAL_CREATE_BOARD'
})