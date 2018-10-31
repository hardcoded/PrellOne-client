import { connect } from 'react-redux'
import Home from '../components/Home'


const mapStateToProps = ( state )=> ({
    boards: state.reducerHome.map((boardId)=> {
      console.log(boardId)
      return {
        id: state.reducerBoard[boardId].id,
        title: state.reducerBoard[boardId].title
      }
    }
  )
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)