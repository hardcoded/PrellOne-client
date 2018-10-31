import { connect } from 'react-redux'
import AddList from '../components/AddList'
import { addList } from '../actions/board.action'
import { hide, show } from '../actions/addList.action'

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  hidden: state.reducerAddList.hidden,
})

const mapDispatchToProps = dispatch => ({
  addList: (id, title) => { 
    dispatch(addList(id, title))
    dispatch(show())},

    hide: () => {
      dispatch(hide())},

    show: () => {
      dispatch(show())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList)