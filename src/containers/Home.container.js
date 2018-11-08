import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import Spinner from '../components/Spinner'
import { openModalCreateBoard } from '../actions/addBoard.action'
import { getUserBoards } from '../services/home.service'
import { userFetched, errorFetchingUser } from '../actions/home.action'

class HomeContainer extends Component {

    componentWillMount() {
        this.props.getBoards(this.props.match.params.username)
    }
 
    render() {
        if (this.props.user) return (<Home {...this.props}></Home>)
        else return (<Spinner></Spinner>)     // TODO: component with loader
    }

}

const mapStateToProps = (state) => ({
    user: state.home.user
})

const mapDispatchToProps = dispatch => ({
    openModalCreateBoard: () => {
        dispatch(openModalCreateBoard())
    },
    getBoards: async(username) => {
        try {
            const data = await getUserBoards(username)
            dispatch(userFetched(data))
        }
        catch(error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(errorFetchingUser(message))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)