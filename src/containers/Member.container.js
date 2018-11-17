import { connect } from 'react-redux'
import Member from '../components/Member'
import React, { Component } from 'react'
import Spinner from '../components/Spinner'

class MemberContainer extends Component{
  
  render(){
    if(this.props.id){
      return (<Member {...this.props}></Member>)
    }
    else{
      return (<Spinner></Spinner>)
    }
  }
  
}
const mapStateToProps = (state, ownProps) => {
  if(state.reducerMember[ownProps.memberId]){
    return ({
      id: state.reducerMember[ownProps.memberId].id,
      userName: state.reducerMember[ownProps.memberId].userName,
      photo: state.reducerMember[ownProps.memberId].profilePicture
    })
  }else{
    return undefined
  }
  
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)