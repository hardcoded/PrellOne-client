import axios from 'axios'

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
export const addComment = (cardId, content, writer) => ({
    type: 'ADD_COMMENT',
    id: cardId,
    comment : {
        id: 'comment' + nextCommentId++,
        content,
        writer    
    }
})

export const updateAttribute = (cardId, attributeName, value) => ({
    type: 'UPDATE_CARD_ATTRIBUTE',
    id: cardId,
    attributeName,
    value
})

export const toggleModal = id => ({
    type: 'TOGGLE_CARD_MODAL',
    id
})

export const toggleDone = id => ({
    type: 'TOGGLE_DONE',
    id
})

export const getLabels = () => {
    return dispatch => {
        axios.get('http://localhost:8080/api/labels') 
            .then(function (response) { 
                // handle succes 
                console.log(response);
                return  dispatch({
                    type: 'LABELS_LOADED',
                    labels: response.data
                }) 
            }) 
            .catch(function (error) { 
                // handle error 
                console.log(error); 
                return dispatch({
                    type: 'LABELS_LOAD_FAILED',
                    labels: []
                })
            })
    }
}