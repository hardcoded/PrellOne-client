import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'
import {toggleEditTitle, listUpdated} from '../actions/list.action'
import { updateList } from '../services/list.service'

class ListPrelloContainer extends Component{
  componentWillMount(){

  }

  render(){
    return (<ListPrello {...this.props}></ListPrello>)
  }
  
}

const mapStateToProps = (state, ownProps) => ({
  list: state.reducerListPrello[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleEditTitle: () => dispatch(toggleEditTitle(ownProps.id)),
  updateList: async (list) => {
    try {
      const data = await updateList({id: list.id, title: list.title})//Here we only update title
      dispatch(listUpdated(data))
    }
    catch(error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      //dispatch(errorFetchingUser(message))
    }
  },
 })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrelloContainer)