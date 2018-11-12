import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import { showAddCard, hideAddCard } from '../actions/list.action'
import { cardAdded } from '../actions/card.action'
import { postCard } from '../services/card.service'

class AddCardContainer extends Component {
  componentWillMount = () => {}
  render = () => (
    <AddCard {...this.props}></AddCard>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    listId: ownProps.listId,
    boardId: ownProps.boardId,
    hidden: state.reducerListPrello[ownProps.listId].addCard,
  })
}

const mapDispatchToProps = dispatch => ({
  hide: (id) => {
    dispatch(hideAddCard(id))
  },
  show: (id) => {
    dispatch(showAddCard(id))
  },
  addCard: async (title, list, board) => {
    try {
      dispatch(cardAdded({title,list,board,id:"idTemp"}))
      const data = await postCard({title, list, board})
      dispatch(cardAdded(data))
    } 
    catch (error) {
      const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
      //dispatch(errorFetchingBoard(message))
      console.log(message)
    }
    finally {
      dispatch(hideAddCard(list))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardContainer)