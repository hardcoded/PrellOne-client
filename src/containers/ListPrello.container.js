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
  console.log(ownProps)
  return ownProps
}

const mapDispatchToProps = dispatch => ({ })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrelloContainer)