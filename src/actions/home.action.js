import axios from 'axios'

let nextBoardId = 3

export const addBoard = (title,idTeam) => 
{   if(idTeam){
    return ({
        type: 'ADD_BOARD',
        idTeam,
        board: {
            id: 'board' + nextBoardId++,
            title: title,
            lists: [],
            teams:[idTeam]
        }
    })
    }else{
       return ({
            type: 'ADD_BOARD',
            board: {
                id: 'board' + nextBoardId++,
                title: title,
                lists: [],
                teams:[]
            }
        })  
    }
    
}

export const getBoards = () => {
    return dispatch => {
        axios.get('http://localhost:8080/api/boards') 
            .then(function (response) { 
                // handle succes 
                console.log(response);
                return  dispatch({
                    type: 'BOARDS_LOADED',
                    boards: response.data
                }) 
            }) 
            .catch(function (error) { 
                // handle error 
                console.log(error); 
                return dispatch({
                    type: 'BOARDS_LOAD_FAILED',
                    boards: []
                })
            })
    }
     
}
