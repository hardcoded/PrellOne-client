let nextCommentId = 2

export const cardAdded = (card) => ({
    type: 'CARD_ADDED',
    card
})

export const addMember = (member, id) => ({
    type: 'ADD_MEMBER',
    id,
    member
})

export const removeMember = (indexMember, id) => ({
    type: 'REMOVE_MEMBER',
    id,
    indexMember
})

export const addLabel = (label, id) => ({
    type: 'ADD_LABEL',
    id,
    label
})

export const removeLabel = (indexLabel, id) => ({
    type: 'REMOVE_LABEL',
    id,
    indexLabel
})

export const addComment = (cardId, content, writer) => ({
    type: 'ADD_COMMENT',
    id: cardId,
    comment : {
        id: 'comment' + nextCommentId++,
        content,
        writer    
    }
})

export const removeComment = (cardId, index) => ({
    type: 'REMOVE_COMMENT',
    id: cardId,
    index
})

export const updateAttribute = (cardId, attributeName, value) => ({
    type: 'UPDATE_CARD_ATTRIBUTE',
    id: cardId,
    attributeName,
    value
})

export const toggleModal = id => ({
    type: 'TOGGLE_CARD_MODAL',
    id
})

export const toggleDone = id => ({
    type: 'TOGGLE_DONE',
    id
})

