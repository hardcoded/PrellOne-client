export const listAdded = (list) => ({
    type: 'LIST_ADDED',
    list
})

export const toggleEditTitle = (id) => ({
    type: 'TOGGLE_EDIT_TITLE',
    id,
})

export const listUpdated = (list) => ({
    type: 'LIST_UPDATED',
    list
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