import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModalCreateBoard } from '../actions/addBoard.action'
import AddBoard from '../components/AddBoard'
import { boardAdded } from '../actions/board.action'
import { postBoard } from '../services/board.service'
import {getTeams} from '../services/team.service'
import {teamsFetched} from '../actions/team.action'

class AddBoardContainer extends Component {
    componentWillMount = () => {
    }

    render = () => (
        <AddBoard {...this.props}></AddBoard>
    )
}


const mapStateToProps = (state, ownProps) =>{
    
    const team=state.reducerTeam[state.reducerAddBoard.activeTeam]
    const teamId=state.reducerAddBoard.activeTeam
    return ({  
        ...team,
        teamId:teamId,
        modal: state.reducerAddBoard.modal,
        owner: state.home.user.id
    })
    
}

const mapDispatchToProps = dispatch => ({
    closeModalCreateBoard: () => {
        dispatch(closeModalCreateBoard())
    },
    addBoard: async (title, owner,team) => {
        try {
          const data = await postBoard({title, owner,team})
          dispatch(boardAdded(data))
          console.log(data)
        } 
        catch (error) {
          const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
          //dispatch(errorFetchingBoard(message))
          console.log(message)
        }
        finally {
            dispatch(closeModalCreateBoard())
        }
    }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoardContainer)