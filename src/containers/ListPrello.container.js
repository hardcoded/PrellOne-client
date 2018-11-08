import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'
import Spinner from '../components/Spinner'

class ListPrelloContainer extends Component{
  componentWillMount(){

  }

  render(){
    if (this.props.loading){
      return (<Spinner></Spinner>)
    }
    return (<ListPrello {...this.props}></ListPrello>)
  }
  
}

const mapStateToProps = (state, ownProps) => {

  if (state.reducerListPrello[ownProps.listId]){
    return ({
      id: state.reducerListPrello[ownProps.listId].id,
      title: state.reducerListPrello[ownProps.listId].title,
      cardIds: state.reducerListPrello[ownProps.listId].cards.map(card => card.id)
    })
  }
  else {
    return ({
      id: '',
      title: '',
      cardIds: [],
      loading: true
    })
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrelloContainer)