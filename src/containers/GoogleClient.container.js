import React, {Component} from 'react'
import { connect } from 'react-redux'
import GoogleClient from '../components/GoogleClient'
import {listGoogleFiles} from '../services/card.service'
import GooglePicker from 'react-google-picker'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GoogleClientContainer extends Component{
  componentWillMount(){
    //listGoogleFiles()
  }

  render = () => (
    <GooglePicker 
        clientId={'338898842430-1hb82kvj2u8c7ko1camthf4tl0fc2fg6.apps.googleusercontent.com'}
        developerKey={'AIzaSyAZL_CRqCzhOL7gou7UAVAvIjCVbZaSgZY'}
        scope={['https://www.googleapis.com/auth/drive.readonly']}
        onChange={data => console.log('on change:', data)}
        onAuthenticate={token => console.log('oauth token:', token)}
        onAuthFailed={data => console.log('on auth failed:', data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
        viewId={'DOCS'}>
        <Button block color="primary">
          <FontAwesomeIcon icon="cloud" />
        </Button>
    </GooglePicker>
    //null
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleClientContainer)