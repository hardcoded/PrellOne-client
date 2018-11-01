import { connect } from 'react-redux'
import Board from '../components/Board'


const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId //boardId passed by router
  return({
    id: state.reducerBoard[boardId].id,
    title: state.reducerBoard[boardId].title,
    lists: state.reducerBoard[boardId].lists,
    labels: state.reducerLabel
  })}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)