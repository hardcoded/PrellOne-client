let nextCommentId = 2

export const updateDesc = (desc, id) => ({
    type: 'UPDATE_DESC',
    id,
    desc
})

export const addMember = (member, id) => ({
    type: 'ADD_MEMBER',
    id,
    member
})

export const removeMember = (indexMember, id) => ({
    type: 'ADD_MEMBER',
    id,
    indexMember
})

export const addLabel = (label, id) => ({
    type: 'ADD_LABEL',
    id,
    label
})
export const removeLabel = (indexLabel, id) => ({
    type: 'ADD_MEMBER',
    id,
    indexLabel
})
export const addComment = (cardId, content, userId) => ({
    type: 'ADD_COMMENT',
    id: cardId,
    comment : {
        id: 'comment' + nextCommentId++,
        content,
        userId    
    }
})

export const toggleModal = id => ({
    type: 'TOGGLE_CARD_MODAL',
    id
})