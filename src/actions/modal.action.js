
export const openModal = (cardId) => ({
    type: 'OPEN_MODAL',
    payload: true,
    cardId
})

export const closeModal = () => ({
    type: 'CLOSE_MODAL',
    payload: false
})
