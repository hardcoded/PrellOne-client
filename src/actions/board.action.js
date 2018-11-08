import axios from 'axios'

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

/** drag and drop card action
 * 
 * @param {*} result contains {destination, source, draggableId}
 */
export const dndCard = result => ({
    ...result,
    type: 'DND_CARD',
})

export const getBoard = (boardId) => {
    return dispatch => {
        axios.get('http://localhost:8080/api/boards/' + boardId) 
            .then(response => { 
                // handle succes 
                console.log(response);
                return  dispatch({
                    type: 'BOARD_LOADED',
                    board: response.data
                }) 
            }) 
            .catch(error => { 
                // handle error 
                console.log(error); 
                return dispatch({
                    type: 'BOARD_LOAD_FAILED',
                    board: []
                })
            })
    }
     
}

export const getLists = (boardId) => {
    return dispatch => {
        axios.get('http://localhost:8080/api/boards/' + boardId + '/lists') 
            .then(response => { 
                // handle succes 
                console.log(response);
                return  dispatch({
                    type: 'LISTS_LOADED',
                    lists: response.data
                }) 
            }) 
            .catch(error => { 
                // handle error 
                console.log(error); 
                return dispatch({
                    type: 'LISTS_LOAD_FAILED',
                    lists: []
                })
            })
    }
     
}
