import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from  'prop-types'

const Board = ({id, title, lists}) => (

    <div>
      <header>
        <Container style={{maxWidth:"100%"}}>
            <h1>{title}</h1>   
        </Container>
      </header>
      <section>
        <Container style={{maxWidth:"100%"}}>
        <Row className="scrolling-wrapper-flexbox">
        {
          lists.map(list=> (
          <Col className="list" xs="12" sm="12" md="6" lg="3">
          <ListPrello key={list} listId={list}></ListPrello>
          </Col>
        ))}
        <Col>
        <AddList boardId={id}></AddList>
        </Col>
        </Row>
        </Container>
      </section>
    </div>
)


Board.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  lists:PropTypes.arrayOf(ListPrelloCompo)
}

export default Board
