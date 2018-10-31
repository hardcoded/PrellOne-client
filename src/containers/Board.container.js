import { connect } from 'react-redux'
import Board from '../components/Board'


const mapStateToProps = state => ({
    id: state.reducerBoard['board1'].id,
    title: state.reducerBoard['board1'].title,
    lists: state.reducerBoard['board1'].lists,
    labels: state.reducerLabel
  })

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)