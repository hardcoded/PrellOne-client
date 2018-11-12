import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row, Card, CardText, CardTitle} from 'reactstrap'
import PropTypes from  'prop-types'

const Account = ({user}) => (
        <Container>
            <header>
                    <h1>Account Manager</h1>
            </header> 
            <Col>
            <Card className="bg-light mb-3">
                <CardHeader>
                    <CardTitle>Information</CardTitle>
                </CardHeader>
                <CardBody>
                    <Col xs="auto" className="p-0">
                        <img width="65px" src={user.profilePicture} alt={user.username} className={"img-fluid rounded"}/>
                    </Col>
                    <CardText>
                        <h5>First Name : </h5>
                        {user.firstname}
                        <h5>Last Name : </h5>
                        {user.lastname}  
                        <h5>Username : </h5>
                        {user.username}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Row>
                        {user.loginType === 'classic' && 
                            <Col xs="6">
                                <Button block>
                                    <Link  to={`${user.username}/updatePwd`} >
                                        Change password
                                    </Link>   
                                </Button>
                            </Col>
                        }
                        <Col xs="6">
                            <Button block>
                                <Link  to={`${user.username}/updateInfo`} >
                                Change information
                                </Link>   
                            </Button>
                        </Col>
                    </Row>
                </CardFooter>
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
    user: PropTypes.object
     
}
    
export default Account;