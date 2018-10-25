import React from 'react'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from  'prop-types'

const Board = ({title, lists}) => (

    <div>
      <header>
        <Container style={{maxWidth:"100%"}}>
            <h1>{title}</h1>   
        </Container>
      </header>
      <section>
        <Container style={{maxWidth:"100%"}}>
        {
          lists.map(list=>
          <ListPrello key={list}listId={list}></ListPrello>
        )}
        </Container>
      </section>
    </div>
)

Board.propTypes={
  title:PropTypes.string.isRequired,
  lists:PropTypes.arrayOf(ListPrelloCompo)
}

export default Board
