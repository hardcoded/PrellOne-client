import { connect } from 'react-redux'
import AddTeamBoard from '../components/AddTeamBoard'
import { hideAddTeamBoard, showAddTeamBoard, teamAddedBoard } from '../actions/board.action'
import { addTeamBoard } from '../services/board.service'

const mapStateToProps = (state, ownProps) => {
    return {
      boardId: ownProps.idBoard,
      hidden: state.reducerBoard[ownProps.idBoard].addTeam,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTeamBoard: async (id, name) => {
    try {
      const data = await addTeamBoard(id, name)
      dispatch(teamAddedBoard(id, data))
      dispatch(hideAddTeamBoard(id))
    } 
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
  },
  hideAddTeamBoard: (id) => {
    dispatch(hideAddTeamBoard(id))
  },
  showAddTeamBoard: (id) => {
    dispatch(showAddTeamBoard(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamBoard)