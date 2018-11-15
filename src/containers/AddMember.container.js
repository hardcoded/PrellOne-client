import { connect } from 'react-redux'
import AddMember from '../components/AddMember'
import { hideAddMember,showAddMember, memberAddedTeam } from '../actions/team.action'
import { hideAddMemberBoard, showAddMemberBoard, memberAddedBoard } from '../actions/board.action'
import { hideAddMemberCard, showAddMemberCard } from '../actions/modalCard.action'
import { memberAddedCard } from '../actions/card.action'
import { addMemberTeam } from '../services/team.service'
import { addMemberBoard } from '../services/board.service'
import { addMemberCard } from '../services/card.service'

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
  else if (ownProps.idCard) {
    return {
      cardId: ownProps.idCard,
      hidden: state.reducerModalCard.addMember
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
      const message = error.status === 500 && !error.data ? "Oops, something went wrong..." : error.data.message
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
      const message = error.status === 500 && !error.data ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
  },
  addMemberCard: async (id, username) => {
    try {
      const data = await addMemberCard(id, username)
      dispatch(memberAddedCard(id, data))
      dispatch(hideAddMemberCard(id))
    } 
    catch (error) {
      const message = error.status === 500 && !error.data ? "Oops, something went wrong..." : error.data.message
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
  },
  hideAddMemberCard: (id) => {
    dispatch(hideAddMemberCard(id))
  },
  showAddMemberCard: (id) => {
    dispatch(showAddMemberCard(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember)