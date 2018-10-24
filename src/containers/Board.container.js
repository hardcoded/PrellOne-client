import { connect } from 'react-redux'
import Board from '../components/Board'
//import {  } from '../actions'

const onDragEnd = result => ({})

const mapStateToProps = state => {
  return ({
    title: state.reducerBoard.title,
    lists: state.reducerBoard.lists,
    onDragEnd: onDragEnd(state.dragResult)
})
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)