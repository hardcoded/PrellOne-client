import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, CardFooter} from 'reactstrap'
import PropTypes from  'prop-types'

const Account = ({firstname, lastname, username}) => (
        <Container>
            <header>
                    <h1>Account Manager</h1>
            </header> 
            <Card className="bg-light mb-3">
                <CardHeader>
                    <CardTitle>Information</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <h5>First Name : </h5>
                        {firstname}
                        <h5>Last Name : </h5>
                        {lastname}  
                        <h5>Username : </h5>
                        {username}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col xs="6">
                            <Button block>
                                <Link  to={"/updatePwd"} >
                                Change password
                                </Link>   
                            </Button>
                        </Col>
                        <Col xs="6">
                            <Button block>
                                <Link  to={"/updateInfo"} >
                                Change information
                                </Link>   
                            </Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Container>
    )

Account.propTypes={
    username: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
      
}
    
export default Account;