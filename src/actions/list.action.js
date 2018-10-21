let nextCardId = 0

export const addCard = (id, card) => ({
    type: 'ADD_CARD',
    id, // list id
    card: {
        id: nextCardId++,
        ...card,
        creation_date: Date() 
    }
})

export const updateTitle = (id, title) => ({
    type: 'UPDATE_TITLE',
    id,
    title
})

export const toggleAddCard = id => ({
    type: 'TOGGLE_ADD_CARD',
    id
})