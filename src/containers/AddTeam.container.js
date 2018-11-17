import { connect } from 'react-redux'
import AddTeam from '../components/AddTeam'
import { hide, show } from '../actions/addTeam.action'
import { teamAdded } from '../actions/team.action'
import { postTeam } from '../services/team.service'

const mapStateToProps = (state) => ({
  hidden: state.reducerAddTeam.hidden,
  user: state.home.user
})

const mapDispatchToProps = dispatch => ({
  addTeam: async (name, user) => {
    try {
      var data = await postTeam({name, members: [user.id]})
      data.members = [user]
      dispatch(teamAdded(data))
    } 
    catch (error) {
      console.log(error);
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      console.log(message)
    }
    finally {
      dispatch(show())
    }
  },
  hide: () => {
    dispatch(hide())},

  show: () => {
    dispatch(show())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeam)