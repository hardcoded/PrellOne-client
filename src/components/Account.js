import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row} from 'reactstrap'
import PropTypes from  'prop-types'

const Account = ({}) => (
        <div>
            <Container>
            <header>
                    <h1>Account Manager</h1>
            </header> 
            <img  className={"img-fluid rounded-circle"}/>
            <Row>
            <Col xs="6">
            <Button block>
            <Link  to={"/updatePwd"} >
            Change password
            </Link>   
            </Button>
            </Col>
            <Col>
            <Button block>
            <Link  to={"/updateInfo"} >
            Change information
            </Link>   
            </Button>
            </Col>
            </Row>
            </Container>
        </div>
    )

Account.propTypes={
    id: PropTypes.string.isRequired,
    username: PropTypes.string,
    photo: PropTypes.string,
      
}
    
export default Account;