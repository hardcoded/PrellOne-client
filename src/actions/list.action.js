let nextCardId = 7

export const addCard = (id, title) => ({
    type: 'ADD_CARD',
    id, // list id
    card: {
        id: nextCardId++,
        index: 0,
        title: title,
        description: '',
        membersIds: [],
        labelIds: [],
        due_date: null,
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
}
)

export const getList=(id,title,cardsIds)=>({
    type: "GET_LIST",
    id,
    title,
    cardsIds
})
