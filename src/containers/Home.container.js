import { connect } from 'react-redux'
import Home from '../components/Home'
import { openModal } from '../actions/addBoard.action'


const mapStateToProps = ( state )=> ({
    boards: state.reducerHome.map((boardId)=> {
      return {
        id: state.reducerBoard[boardId].id,
        title: state.reducerBoard[boardId].title
      }
    }
  )
})

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(openModal())}
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)