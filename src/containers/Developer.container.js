import { connect } from 'react-redux'
import Developer from '../components/Developer'
import { register as devRegister } from '../services/developer.service';
import { register, registerSuccess, registerFailed, clearDeveloperInfo } from '../actions/developer.action';

const mapStateToProps = (state, ownProps) => ({ 
    waiting: state.developer.waiting,
    clientID: state.developer.clientID,
    clientSecret: state.developer.clientSecret,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    register: async(clientName, redirectUri) => {
        dispatch(register("Saving your data, please wait..."))
        try {
            const data = await devRegister(clientName, redirectUri)
            dispatch(registerSuccess(data.id, data.clientSecret))
            return data
        }
        catch(error) {
            const message = error.status === 500 ? "Oops, something went wrong..." : error.data.message
            dispatch(registerFailed(message))
            throw error
        }
    },
    clear: async() => {
        dispatch(clearDeveloperInfo())
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developer)