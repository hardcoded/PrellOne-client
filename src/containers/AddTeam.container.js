import { connect } from 'react-redux'
import AddTeam from '../components/AddTeam'
import { addTeam } from '../actions/teamsManager.action'
import { hide, show } from '../actions/addTeam.action'

const mapStateToProps = (state) => ({
  hidden: state.reducerAddTeam.hidden
})

const mapDispatchToProps = dispatch => ({
  addTeam: (name) => { 
    dispatch(addTeam(name))
    dispatch(show())},

    hide: () => {
      dispatch(hide())},

    show: () => {
      dispatch(show())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeam)