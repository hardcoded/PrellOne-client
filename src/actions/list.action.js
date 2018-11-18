/**
 * 
 * @param {List} list list added object
 * @return {action} LIST_ADDED action and the payload with the list
 * 
 */
export const listAdded = (list) => ({
    type: 'LIST_ADDED',
    list
})

/**
 * 
 * @param {string} id  id of the list edited
 * @return {action} TOGGLE_EDIT_TITLE action and the payload with the id of the list edited
 * 
 */
export const toggleEditTitle = (id) => ({
    type: 'TOGGLE_EDIT_TITLE',
    id,
})

/**
 * 
 * @param {List } list list with the new title
 * @return {action} TITLE_LIST_UPDATED action and the payload with the id of the list updated
 */
export const listUpdatedTitle = (list) => ({
    type: 'TITLE_LIST_UPDATED',
    list
})

/**
 * 
 * @param {string} id  id of the list 
 * @return {action} HIDE_ADD_CARD action and the payload with the id of the list edited
 * 
 */
export const hideAddCard = id => ({
    type: 'HIDE_ADD_CARD',
    id
})

/**
 * 
 * @param {string} id  id of the list 
 * @return {action} SHOW_ADD_CARD action and the payload with the id of the list edited
 * 
 */
export const showAddCard = id => ({
    type: 'SHOW_ADD_CARD',
    id
})

/**
 * 
 * @param {string} id id of the list   
 * @param {string} title title of the list
 * @param {[Card]} cardsIds array of cards of the list
 * @return {action} GET_LIST action and the payload with the list information
 */
export const getList=(id,title,cardsIds)=>({
    type: "GET_LIST",
    id,
    title,
    cardsIds
})