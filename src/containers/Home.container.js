import React, {Component} from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { openModalCreateBoard } from '../actions/addBoard.action'
import { getBoards } from '../actions/home.action'

class HomeContainer extends Component{
  componentWillMount(){
    this.props.getBoards()
  }

  render(){
    return (<Home {...this.props}></Home>)
  }
  
}

const mapStateToProps = ( state ) => {
  return({
    boards: state.reducerHome.map((boardId) => ({ 
        id: state.reducerBoard[boardId].id, 
        title: state.reducerBoard[boardId].title 
      }) 
    )
  })
}

const mapDispatchToProps = dispatch => ({
  openModalCreateBoard: () => {
    dispatch(openModalCreateBoard())
  },
  getBoards: () => {
    dispatch(getBoards())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)