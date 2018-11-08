import { connect } from 'react-redux'
import UpdateInfo from '../components/UpdateInfo'
import { updateInfoSuccess, updateInfoError } from '../actions/updateInfo.action'
import { updateInfo } from '../services/user.service';

const mapStateToProps = (state, ownProps) => ({
    user: state.home.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateInfo: async (user, firstname, lastname) => {
        try {
            await updateInfo(user, firstname, lastname)
            dispatch(updateInfoSuccess())
        }
        catch (error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(updateInfoError(message))
            throw error
        }
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateInfo)