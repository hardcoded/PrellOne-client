import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddList from '../components/AddList'
import { listAdded } from '../actions/list.action'
import { hide, show } from '../actions/addList.action'
import { postList } from '../services/list.service'

class AddListContainer extends Component {
  componentWillMount = () => {

  }

  render = () => (
      <AddList {...this.props}></AddList>
  )
}

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  hidden: state.reducerAddList.hidden,
})

const mapDispatchToProps = dispatch => ({

  hide: () => {
    dispatch(hide())
  },

  show: () => {
    dispatch(show())
  },

  addList: async (title, board) => {
    try {
      dispatch(listAdded({title,board,id:'idTemp'}))
      const data = await postList({title, board})
    } 
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      //dispatch(errorFetchingBoard(message))
      console.log(message)
    }
    finally {
        dispatch(show())
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddListContainer)