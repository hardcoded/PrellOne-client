import { connect } from 'react-redux'
import CardPrello from '../components/CardPrello'


const mapStateToProps = (state, ownProps) => {
  return ({
    id: state.reducerCardPrello[ownProps.cardId].id,
    title: state.reducerCardPrello[ownProps.cardId].title
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPrello)