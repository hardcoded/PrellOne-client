import React, {Component} from 'react'
import { connect } from 'react-redux'
import GooglePicker from 'react-google-picker'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { googleConfig } from '../services/card.service'

class GoogleClientContainer extends Component{
  componentWillMount(){
    //listGoogleFiles()
  }

  render = () => (
    <GooglePicker 
        clientId={googleConfig.clientId}
        developerKey={googleConfig.developerKey}
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
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleClientContainer)