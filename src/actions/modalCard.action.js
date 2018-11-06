
export const openModal = (cardId) => ({
    type: 'OPEN_MODAL',
    cardId
})

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})

export const toggleEdit = (cardId, field) => ({
    type: 'TOGGLE_EDIT',
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