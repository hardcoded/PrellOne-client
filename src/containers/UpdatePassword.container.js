import { connect } from 'react-redux'
import UpdatePassword from '../components/UpdatePassword'
import { updatePassword } from '../services/user.service';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updatePassword: async (user, oldPwd, newPWd) => {
        try {
            await updatePassword(user, oldPwd, newPWd)
            dispatch(registerSuccess())
        }
        catch (error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(registerError(message))
            throw error
        }
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePassword)