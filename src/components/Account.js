import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container} from 'reactstrap'
import PropTypes from  'prop-types'

const Account = ({}) => (
        <div>
            <Container>
            <header>
                    <h1>Account Manager</h1>
            </header> 
            <img  className={"img-fluid rounded-circle"}/>
            <Button>
            <Link  to={"/updatePwd"} >
            Change password
            </Link>   
            </Button>
            </Container>
        </div>
    )

Account.propTypes={
    id: PropTypes.string.isRequired,
    username: PropTypes.string,
    photo: PropTypes.string,
      
}
    
export default Account;