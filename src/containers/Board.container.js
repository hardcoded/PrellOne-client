import { connect } from 'react-redux'
import Board from '../components/Board'
import reducerBoard from '../reducers/board.reducer'

const mapStateToProps = ( state )=> {
  return ({
    id: state.reducerBoard.id,
    title: state.reducerBoard.title,
    lists: state.reducerBoard.lists
})
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)