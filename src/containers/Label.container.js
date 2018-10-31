import { connect } from 'react-redux'
import Label from '../components/Label'


const mapStateToProps = (state, ownProps) => {
  return ({
    id: state.reducerLabel[ownProps.labelId].id,
    title: state.reducerLabel[ownProps.labelId].title,
    color: state.reducerLabel[ownProps.labelId].color
  })
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label)