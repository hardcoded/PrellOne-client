import io from 'socket.io-client'

const socket=io('http://localhost:8080')

socket.on("error",(error)=>{
    console.log(error)
})
/**
 * functions for the socket 
 */
export default {
    joinBoard(boardId){
        socket.emit("joinBoard",boardId)
    },
    leaveBoard(boardId){
        socket.emit("leaveBoard",boardId)
    },
    init(store){
        socket.on( "action" ,(action)=>{
            store.dispatch(action)
        })
        socket.on("connect",()=>
            console.log("user connected!")
        )
    },
    emit(type,payload){
        console.log(type+" "+payload)
        socket.emit(type,payload)
    }
}