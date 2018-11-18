let nextCommentId=2
/**
 * 
 * @param {Card} card  the new card added
 * @return {action} CARD_ADDED action and the payload  with the new card 
 */
export const cardAdded = (card) => ({
    type: 'CARD_ADDED',
    card
})

/**
 * 
 * @param {Card} card the card updated
 * @return {action} CARD_UPDATED action and the payload  with the card updated
 */
export const cardUpdated = (card) => ({
    type: 'CARD_UPDATED',
    card 
})

/**
 * 
 * @param {Member} member member to add to the card
 * @param {string} id id of the card 
 * @return {action} ADD_MEMBER action and the payload  with the id of the card and the member
 */
export const addMember = (member, id) => ({
    type: 'ADD_MEMBER',
    id,
    member
})

/**
 * 
 * @param {Member} member member to add to the card
 * @param {string} id id of the card 
 * @return {action} REMOVE_MEMBER action and the payload  with the id of the card and the member
 * 
 */
export const removeMember = (indexMember, id) => ({
    type: 'REMOVE_MEMBER',
    id,
    indexMember
})

/**
 * 
 * @param {Label} label the label to add to the card
 * @param {string} id  id of the card
 * @return {action} ADD_LABEL action and the payload  with the id of the card and the label
 * 
 */
export const addLabel = (label, id) => ({
    type: 'ADD_LABEL',
    id,
    label
})

/**
 * 
 * @param {number} indexLabel the index label to add to the card
 * @param {string} id  id of the card
 * @return {action} REMOVE_LABEL action and the payload  with the id of the card and the index label
 * 
 */
export const removeLabel = (indexLabel, id) => ({
    type: 'REMOVE_LABEL',
    id,
    indexLabel
})

/**
 * 
 * @param {string} cardId id of the card
 * @param {string} content the value of the comment
 * @param {User} writer the user who write the comment
 * @return {action} ADD_COMMENT action and the payload  with the id of the card and comment object
 */
export const addComment = (cardId, content, writer) => ({
    type: 'ADD_COMMENT',
    id: cardId,
    comment : {
        id: 'comment' + nextCommentId++,
        content,
        writer    
    }
})

/**
 * 
 * @param {string} cardId id of the card
 * @param {number} index index of the comment 
 * @return {action} REMOVE_COMMENT action and the payload  with the id of the card and index of the comment
 */
export const removeComment = (cardId, index) => ({
    type: 'REMOVE_COMMENT',
    id: cardId,
    index
})

/**
 * 
 * @param {string} cardId id of the card
 * @param {string} attributeName the name of the attribute
 * @param {*} value the value of the attributeName
 * @return {action} UPDATE_CARD_ATTRIBUTE action and the payload  with the id of the card and attribute name and his value
 */
export const updateAttribute = (cardId, attributeName, value) => ({
    type: 'UPDATE_CARD_ATTRIBUTE',
    id: cardId,
    attributeName,
    value
})

/**
 * 
 * @param {string} id id of the card
 * @return {action} TOGGLE_CARD_MODAL action and the payload with the id
 */
export const toggleModal = id => ({
    type: 'TOGGLE_CARD_MODAL',
    id
})

/**
 * 
 * @param {string} id id of the card
 * @return {action} TOGGLE_DONE action and the payload with the id
 */
export const toggleDone = id => ({
    type: 'TOGGLE_DONE',
    id
})
