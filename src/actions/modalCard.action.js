
export const openModal = (cardId) => ({
    type: 'OPEN_MODAL',
    cardId
})

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})

export const toggleEdit = (field) => ({
    type: 'TOGGLE_EDIT',
    field
})

export const closeEdit = (field) => ({
    type: 'CLOSE_EDIT',
    field
})

export const openEditCardDesc = (description) => ({
    type: 'OPEN_EDIT_CARD_DESCRIPTION',
    description
})

export const editCardDesc = (value) => ({
    type: 'EDIT_CARD_DESCRIPTION',
    value
})

export const showAddMemberCard = id => ({
    type: 'SHOW_ADD_MEMBER_CARD',
    id
})

export const hideAddMemberCard = id => ({
    type: 'HIDE_ADD_MEMBER_CARD',
    id
})