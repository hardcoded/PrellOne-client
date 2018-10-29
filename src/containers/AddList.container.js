import React from 'react'
import { connect } from 'react-redux'
import AddList from '../components/AddList'
import { addList } from '../actions/board.action'

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId
})

const mapDispatchToProps = dispatch => ({
  addList: (id, title) => { 
    dispatch(addList(id, title))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList)