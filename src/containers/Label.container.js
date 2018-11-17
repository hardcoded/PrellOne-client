import { connect } from 'react-redux'
import Label from '../components/Label'
import {toggleEditTitleLabel, labelUpdatedTitle} from '../actions/label.action'
import { updateLabel } from '../services/label.service'
import React, { Component } from 'react'
import Spinner from '../components/Spinner'

class LabelContainer extends Component {

  render() {
      if (this.props.id) return (<Label {...this.props}></Label>)
      else return (<Spinner></Spinner>)
  }

}

const mapStateToProps = (state, ownProps) => {
  if(state.reducerLabel[ownProps.labelId]){
    return ({
      id: state.reducerLabel[ownProps.labelId].id,
      title: state.reducerLabel[ownProps.labelId].title,
      color: state.reducerLabel[ownProps.labelId].color,
      editTitle: state.reducerLabel[ownProps.labelId].editTitle,
      editable: ownProps.editable,
      size: ownProps.size
    })
  }
  else{
    return undefined
  }
  
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleEditTitle: () => dispatch(toggleEditTitleLabel(ownProps.labelId)),
  updateLabel: async (label) => {
    try {
      const data = await updateLabel({id: label.id, title: label.title})
      dispatch(labelUpdatedTitle(data))
    }
    catch(error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
    }
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelContainer)