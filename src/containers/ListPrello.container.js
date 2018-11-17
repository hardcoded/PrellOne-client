import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'
import {toggleEditTitle, listUpdatedTitle} from '../actions/list.action'
import { updateListTitle } from '../services/list.service'

class ListPrelloContainer extends Component{
  componentWillMount(){

  }

  render(){
    return (<ListPrello {...this.props}></ListPrello>)
  }
  
}

const mapStateToProps = (state, ownProps) => {
  if(state.reducerListPrello[ownProps.id]){
    return {list:state.reducerListPrello[ownProps.id]}
  }
  else{
    return undefined
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleEditTitle: () => dispatch(toggleEditTitle(ownProps.id)),
  updateList: async (list) => {
    try {
      const data = await updateListTitle({id: list.id, title: list.title})//Here we only update title
      dispatch(listUpdatedTitle(data))
    }
    catch(error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
    }
  },
 })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrelloContainer)