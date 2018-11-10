const socket = (state=null,action) => {
    switch (action.type) {
        case 'SOCKET_ADD_CARD' :
        console.log(action.payload)
        default :
           return state
            console.log("ok")
        }
}

export default socket