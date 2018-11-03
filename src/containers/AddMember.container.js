import { connect } from 'react-redux'
import AddMember from '../components/AddMember'
import { addMemberTeam,hideAddMember,showAddMember } from '../actions/team.action'



const mapStateToProps = (state, ownProps) => ({
  hidden: state.reducerTeam[ownProps.idTeam].addMember,
})

const mapDispatchToProps = dispatch => ({
  addMemberTeam: (id, username) => { 
    dispatch(addMemberTeam(id, username))
  },
  hide: (id) => {
    dispatch(hideAddMember(id))
  },
  show: (id) => {
    dispatch(showAddMember(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember)