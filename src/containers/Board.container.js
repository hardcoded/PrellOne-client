import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import { dndCard, getBoard } from '../actions/board.action'
import Spinner from '../components/Spinner';

class BoardContainer extends Component{
  componentWillMount(){
    this.props.getBoard(this.props.id)
  }

  render(){
    console.log("Props :")
    console.log(this.props)
    if (this.props.loading){
      console.log("Spinner")
      return <Spinner></Spinner>
    }
    return (<Board {...this.props}></Board>)
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId //boardId passed by router
  if (state.reducerBoard[boardId]) {
    return {
      id: state.reducerBoard[boardId].id,
      title: state.reducerBoard[boardId].title,
      lists: state.reducerBoard[boardId].lists,
      labels: state.reducerLabel
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDragEnd: (result) => dispatch(dndCard(result)),
  getBoard: (boardId) => {
    dispatch(getBoard(boardId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)