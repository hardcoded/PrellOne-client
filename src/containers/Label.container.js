import { connect } from 'react-redux'
import Label from '../components/Label'
//import {  } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  title: state.reducerLabel[ownProps.labelId].title,
  color: state.reducerLabel[ownProps.labelId].color
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label)