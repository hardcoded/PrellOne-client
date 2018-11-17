import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import { dndCard, boardFetched } from '../actions/board.action'
import { getBoard } from '../services/board.service'
import Spinner from '../components/Spinner';
import Socket from '../services/socket.service'

class BoardContainer extends Component{
  componentWillMount(){
    Socket.joinBoard(this.props.match.params.boardId)
    
    this.props.getBoard(this.props.match.params.boardId)
    

  }
  componentWillUnmount(){

    Socket.emit("leaveBoard",this.props.match.params.boardId)
  }

  render(){
    if (this.props.loading){
      return <Spinner></Spinner>
    }
    else {
      return (<Board {...this.props}></Board>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId 
  if (state.reducerBoard[boardId]) {
    return {
      id: state.reducerBoard[boardId].id,
      title: state.reducerBoard[boardId].title,
      teams: state.reducerBoard[boardId].teams,
      lists: state.reducerBoard[boardId].lists,
      members: state.reducerBoard[boardId].members,
      labels: state.reducerBoard[boardId].labels,
      loading: false
    }
  }
  else {
    return {
      loading: true
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDragEnd: (result) => dispatch(dndCard(result)),
  getBoard: async (boardId) => {
    try {
      const data = await getBoard(boardId)
      dispatch(boardFetched(data))
    } 
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)