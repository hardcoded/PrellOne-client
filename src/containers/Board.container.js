import { connect } from 'react-redux'
import Board from '../components/Board'
import { dndCard } from '../actions/board.action'


const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId //boardId passed by router
  return({
    id: state.reducerBoard[boardId].id,
    title: state.reducerBoard[boardId].title,
    lists: state.reducerBoard[boardId].lists,
    labels: state.reducerLabel
  })}

const mapDispatchToProps = dispatch => ({
  onDragEnd: (result) => {console.log(result);dispatch(dndCard(result))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)