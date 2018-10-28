import React from 'react'
import { connect } from 'react-redux'
import AddList from '../components/AddList'
import { addList } from '../actions/board.action'

const toggleCardModal = () => {}

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId
})

const mapDispatchToProps = dispatch => ({
  addList: (id, title) => { 
    console.log(id);
    dispatch(addList(id, title))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList)