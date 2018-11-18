
/**
 *
 * @param {string} cardId card id
 * @return {action} action 'OPEN_MODAL' and payload with card id
 */
export const openModal = (cardId) => ({
    type: 'OPEN_MODAL',
    cardId
})

/**
 * @return {action} action 'CLOSE_MODAL'
 */
export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})

/**
 * 
 * @param {*} field field to edit
 * @return {action} action TOGGLE_EDIT and payload with the field to edit
 */
export const toggleEdit = (field) => ({
    type: 'TOGGLE_EDIT',
    field
})

/**
 * 
 * @param {*} field field edited
 * @return {action} action CLOSE_EDIT and payload with the field edited
 */
export const closeEdit = (field) => ({
    type: 'CLOSE_EDIT',
    field
})

/**
 * 
 * @param {*} description the description object
 * @return {action} action OPEN_EDIT_CARD_DESCRIPTION and payload with the description object
 */
export const openEditCardDesc = (description) => ({
    type: 'OPEN_EDIT_CARD_DESCRIPTION',
    description
})

/**
 * 
 * @param {string} value the value of the description 
 * @return {action} action EDIT_CARD_DESCRIPTION and payload with the value of the description 
 */
export const editCardDesc = (value) => ({
    type: 'EDIT_CARD_DESCRIPTION',
    value
})