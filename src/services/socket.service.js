import io from 'socket.io-client'
import API_URL from '../config'

const socket=io(`${API_URL}`)

socket.on("error",(error)=>{
    console.log(error)
})

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
