import { connect } from 'react-redux'
import AddMember from '../components/AddMember'
import { hideAddMember,showAddMember, memberAddedTeam } from '../actions/team.action'
import { hideAddMemberBoard, showAddMemberBoard, memberAddedBoard } from '../actions/board.action'
import { addMemberTeam } from '../services/team.service'
import { addMemberBoard } from '../services/board.service'

const mapStateToProps = (state, ownProps) => {
  if (ownProps.idTeam){
    return {
      teamId: ownProps.idTeam,
      hidden: state.reducerTeam[ownProps.idTeam].addMember,
    }
  }
  else if (ownProps.idBoard){
    return {
      boardId: ownProps.idBoard,
      hidden: state.reducerBoard[ownProps.idBoard].addMember,
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addMemberBoard: async (id, username) => {
    try {
      const data = await addMemberBoard(id, username)
      dispatch(memberAddedBoard(id, data))
      dispatch(hideAddMemberBoard(id))
    }
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
  },
  addMemberTeam: async (id, username) => {
    try {
      const data = await addMemberTeam(id, username)
      dispatch(memberAddedTeam(id, data))
      dispatch(hideAddMember(id))
    } 
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
  },
  hideAddMemberTeam: (id) => {
    dispatch(hideAddMember(id))
  },
  showAddMemberTeam: (id) => {
    dispatch(showAddMember(id))
  },
  hideAddMemberBoard: (id) => {
    dispatch(hideAddMemberBoard(id))
  },
  showAddMemberBoard: (id) => {
    dispatch(showAddMemberBoard(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember)