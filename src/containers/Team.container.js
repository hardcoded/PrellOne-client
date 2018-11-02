import { connect } from 'react-redux'
import Team from '../components/Team'


const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.teamId 
  return({
    id: state.reducerTeam[teamId].id,
    name: state.reducerTeam[teamId].name,
    boards: state.reducerTeam[teamId].boards.map((boardId)=> {
      return {
        id: state.reducerBoard[boardId].id,
        title: state.reducerBoard[boardId].title
      }
    }),
    members: state.reducerTeam[teamId].members
  })}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team)