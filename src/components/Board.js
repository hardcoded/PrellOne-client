import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Container, Row, Col } from 'reactstrap'
import ModalCard from '../containers/ModalCard.container'
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
          <Col xs="12" sm="6" md="4" lg="3" key={list}>
          <ListPrello listId={list}></ListPrello>
          </Col>
        ))}
        <Col xs="12" sm="6" md="4" lg="3">
        <AddList boardId={id}></AddList>
        </Col>
        </Row>
        </Container>
        <ModalCard/>
      </section>
    </div>
)


Board.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  lists:PropTypes.arrayOf(ListPrelloCompo)
}

export default Board
