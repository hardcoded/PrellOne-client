import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamsManager from '../components/TeamsManager'
import Spinner from '../components/Spinner'
import { getUserTeams } from '../services/home.service'
import { teamsFetched } from '../actions/team.action'

class TeamsManagerContainer extends Component {
  
  componentWillMount() {
    this.props.getTeams(this.props.user)
  }

  render() {
    if (this.props.teams) {
      return (<TeamsManager {...this.props}></TeamsManager>)
    }
    else {
      return (<Spinner></Spinner>)
    }
  }
}

const mapStateToProps = (state)=> ({
    user: state.home.user.username,
    teams: state.reducerTeamsManager
})


const mapDispatchToProps = dispatch => ({
  getTeams: async(username) => {
    try {
        const data = await getUserTeams(username)
        dispatch(teamsFetched(data.teams))
    }
    catch(error) {
        const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
        console.log(message)
        //dispatch(errorFetchingTeams(message))
    }
}
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsManagerContainer)