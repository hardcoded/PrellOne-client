export const listAdded = (list) => ({
    type: 'LIST_ADDED',
    list
})

export const updateTitle = (id, title) => ({
    type: 'UPDATE_TITLE',
    id,
    title
})

export const hideAddCard = id => ({
    type: 'HIDE_ADD_CARD',
    id
})

export const showAddCard = id => ({
    type: 'SHOW_ADD_CARD',
    id
})

export const getList=(id,title,cardsIds)=>({
    type: "GET_LIST",
    id,
    title,
    cardsIds
})