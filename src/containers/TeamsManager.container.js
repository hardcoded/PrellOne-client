import { connect } from 'react-redux'
import TeamsManager from '../components/TeamsManager'


const mapStateToProps = (state)=> ({
    teams: state.reducerTeamsManager.map((teamId) => {
      return {
        id: state.reducerTeam[teamId].id,
        name: state.reducerTeam[teamId].name,
        boards:state.reducerTeam[teamId].boards,
        members:state.reducerTeam[teamId].members
      }
    }
  )
})


const mapDispatchToProps = dispatch => ({

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsManager)