import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Row, Card, CardBody,
    CardTitle } from 'reactstrap'
import PropTypes from  'prop-types'


const Home = ({boards, openModalCreateBoard}) => (
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
                                <CardTitle>
                                <Link className="nav-link" to={"/board/"+board.id}>
                                    {board.title}
                                </Link>
                                    
                                </CardTitle>
                            </CardBody>
                        </Card>
                    ))}
                        <Card onClick={() => openModalCreateBoard()}>
                            <CardBody>
                                <CardTitle>
                                    Create a board...
                                </CardTitle>
                            </CardBody>
                        </Card>
                </Row>
            </Container>
            </div>
    )

Home.propTypes={
    openModalCreateBoard: PropTypes.func.isRequired,
      
}
    
export default Home;