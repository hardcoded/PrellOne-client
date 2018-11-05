import React from 'react'
import { connect } from 'react-redux'
import SignIn from '../components/SignIn'
import { login } from '../actions/signIn.action'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => { 
    dispatch(login(email, password))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)