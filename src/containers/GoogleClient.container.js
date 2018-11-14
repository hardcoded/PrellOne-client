import React, {Component} from 'react'
import { connect } from 'react-redux'
import GoogleClient from '../components/GoogleClient'
import {listGoogleFiles} from '../services/card.service'

class GoogleClientContainer extends Component{
  componentWillMount(){
    listGoogleFiles()
  }

  render = () => (
    //<GoogleClient></GoogleClient>
    null
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleClientContainer)