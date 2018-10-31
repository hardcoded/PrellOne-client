let nextListId = 4

export const addList = (id, title) => ({
    type: 'ADD_LIST',
    id,
    list: {
        id: 'list' + nextListId++,
        title: title,
        cardIds: [],
        creation_date: Date() 
    }
})

export const updateTitle = (id, title) => ({
    type: 'UPDATE_TITLE',
    id,
    title
})

export const toggleAddCard = id => ({
    type: 'TOGGLE_ADD_LIST',
    id
})