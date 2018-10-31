import React from 'react';
import { Container, Jumbotron, Button, Row, Card, CardImg, CardBody,
    CardTitle } from 'reactstrap'

const Home = (boards) => (
            <div>
            <header>
                <Jumbotron>
                    <h1 className="display-3">Welcome to Prello !</h1>
                    <p className="lead">Wooow ! this is way better than Trello.</p>
                    <hr className="my-2" />
                    <p>It is built with Node.js and React.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </header>
            <Container>
                <Row>
            <Card>
                <CardImg top width="20%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Board title</CardTitle>
                    <Button>Button to go to the board</Button>
                </CardBody>
            </Card>
            </Row>
            </Container>
            </div>
    )
    
export default Home;