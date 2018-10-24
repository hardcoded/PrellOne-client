import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import { Container, Row, Col } from 'reactstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import PropTypes from  'prop-types'

const Board = ({title, lists, onDragEnd}) => {
  return  (
            <header>
              <Container style={{maxWidth:"100%"}}>
                  <h1>{title}</h1>
              </Container>
            </header>,
            <section>
              <Container style={{maxWidth:"100%"}}>
                <Row className="scrolling-wrapper-flexbox">
                    <DragDropContext onDragEnd={onDragEnd}>
                    {lists.map((listId) => {
                      return (
                        <Col className="list" xs="12" sm="12" md="6" lg="3">
                          <ListPrello listId={listId}></ListPrello>
                        </Col>
                      )
                    })}
                    </DragDropContext>
                </Row>
              </Container>
            </section>
  )
}

Board.PropTypes={
  title:      PropTypes.string.isRequired,
  lists:      PropTypes.arrayOf(ListPrello),
  onDragEnd:  PropTypes.func.isRequired
}

export default Board
