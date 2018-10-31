import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import SignUp from '../containers/SignUp.container'
import { Container, Row, Col } from 'reactstrap'
import Modal from '../containers/Modal.container'
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
          <Col  md="2" lg="3">
          <ListPrello key={list} listId={list}></ListPrello>
          </Col>
        ))}
        <Col  md="2" lg="3">
        <AddList boardId={id}></AddList>
        </Col>
        </Row>
        <SignUp/>
        </Container>
        <Modal/>
      </section>
    </div>
)


Board.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  lists:PropTypes.arrayOf(ListPrelloCompo)
}

export default Board
