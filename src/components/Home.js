import React from 'react';
import { Container, Jumbotron, Button, Row } from 'reactstrap'

const Home = () => (
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
            <section>
                <Container>
                    <Row> </Row>
                </Container>
            </section>
            </div>
    )

export default Home;