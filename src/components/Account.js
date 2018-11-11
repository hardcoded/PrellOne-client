import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row, Card, CardText, CardTitle} from 'reactstrap'
import PropTypes from  'prop-types'

const Account = ({id, firstname, lastname, username}) => (
        <div>
            <Container>
            <header>
                    <h1>Account Manager</h1>
            </header> 
            <Col>
            <Card className="bg-light mb-3">
            <CardTitle>Information</CardTitle>
            <CardText>{firstname}</CardText>
            <CardText>{lastname}</CardText>
            <CardText>{username}</CardText>
            </Card>
            </Col>
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
    firstname: PropTypes.string,
    lastname: PropTypes.string,
      
}
    
export default Account;