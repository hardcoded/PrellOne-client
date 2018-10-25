import { connect } from 'react-redux'
import CardPrello from '../components/CardPrello'


const mapStateToProps = (state, ownProps) => {
  const card = state.reducerCardPrello[ownProps.cardId]
  return ({
    id: card.id,
    title: card.title,
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPrello)