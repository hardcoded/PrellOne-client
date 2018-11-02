import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Container, Row, Col } from 'reactstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import ModalCard from '../containers/ModalCard.container'
import PropTypes from  'prop-types'

const Board = ({id, title, lists, onDragEnd}) => (

    <div>
      <header>
        <Container style={{maxWidth:"100%"}}>
            <h1>{title}</h1>   
        </Container>
      </header>
      <section>
        <Container style={{maxWidth:"100%"}}>
        <Row className="scrolling-wrapper-flexbox">
          <DragDropContext onDragEnd={onDragEnd}>
            {
              lists.map(list=> (
              <Col xs="12" sm="6" md="4" lg="3" key={list}>
              <ListPrello listId={list}></ListPrello>
              </Col>
            ))}
          </DragDropContext>
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
  lists:PropTypes.arrayOf(ListPrelloCompo),
  onDragEnd: PropTypes.func.isRequired
}

export default Board
