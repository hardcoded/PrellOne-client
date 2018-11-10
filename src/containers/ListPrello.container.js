import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListPrello from '../components/ListPrello'

class ListPrelloContainer extends Component{
  componentWillMount(){

  }

  render(){
    return (<ListPrello {...this.props}></ListPrello>)
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const list = state.reducerListPrello[ownProps.id]
  return list
}

const mapDispatchToProps = dispatch => ({ })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrelloContainer)