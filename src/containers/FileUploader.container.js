import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadDocumentRequest } from '../services/card.service'
import { uploadSuccess, uploadFail } from '../actions/fileUploader.action'
import { FilePicker } from 'react-file-picker'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FileUploaderContainer extends Component {
  render = () => (
    <FilePicker
      extensions={['md','jpg','jpeg']}
      onChange={this.props.handleFileUpload}
      onError={this.props.onError}>

      <Button block color="primary">
        <FontAwesomeIcon icon="upload" />
      </Button>
    </FilePicker>
  )
} 

// Component method
const handleFileUpload = async (dispatch, file, cardId, update) => {
  try {
    const data = await uploadDocumentRequest(file, cardId)
    console.log("Received Data")
    console.log(data)
    update(data)
  }
  catch(error) {
    const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
    dispatch(uploadFail(error))
  }
  
}

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFileUpload: (data) => handleFileUpload(dispatch, data, ownProps.cardId, ownProps.updateCard),
  onError : (err) => dispatch(uploadFail(err))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploaderContainer)