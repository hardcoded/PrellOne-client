import { connect } from 'react-redux'
import Team from '../components/Team'
import { openModalCreateBoard } from '../actions/addBoard.action'
import React, { Component } from 'react'
import Spinner from '../components/Spinner'
class TeamContainer extends Component {

  render() {
    if (this.props.id) {
      return (<Team {...this.props}></Team>)
    }
    else {
      return (<Spinner></Spinner>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.teamId 
  if(state.reducerTeam[teamId]){
    return({
      id: state.reducerTeam[teamId].id,
      name: state.reducerTeam[teamId].name,
      boards: state.reducerTeam[teamId].boards,
      members: state.reducerTeam[teamId].members
    })
  }
  else{
    return undefined
  }
}

const mapDispatchToProps = dispatch => ({
  openModalCreateBoard: (teamId) => {
    dispatch(openModalCreateBoard(teamId))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamContainer)