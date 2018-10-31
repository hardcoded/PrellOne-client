import React from 'react';
import { Container, Jumbotron, Row, Card, CardBody,
    CardTitle } from 'reactstrap'

const Home = ({boards}) => (
            <div>
            <header>
                <Jumbotron>
                    <h1 className="display-3">Welcome to Prello !</h1>
                    <p className="lead">Wooow ! this is way better than Trello.</p>
                    <hr className="my-2" />
                    <p>It is built with Node.js and React.</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
            </header>
            <Container>
                <Row>
                    {boards.map(board => (
                        <Card>
                            <CardBody>
                                <CardTitle>{board.title}</CardTitle>
                            </CardBody>
                        </Card>
                    ))}
                </Row>
            </Container>
            </div>
    )
    
export default Home;