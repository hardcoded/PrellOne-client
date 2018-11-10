import io from 'socket.io-client'

const socket=io('http://localhost:8080')

socket.on("error",(error)=>{
    console.log(error)
})

export default {
    init(store){
        socket.on( "action" ,(action)=>{
            console.log("from emit")
            console.log(action)
            store.dispatch(action)
        })
        socket.on("connect",()=>
            console.log("user connected!")
        )
    },
    emit(type,payload){
        socket.emit(type,payload)
    }
}