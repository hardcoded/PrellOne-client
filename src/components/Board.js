import React from 'react'
import Member from '../containers/Member.container'
import AddMember from '../containers/AddMember.container'
import AddTeamBoard from '../containers/AddTeamBoard.container'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Row, Col } from 'reactstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import ModalCard from '../containers/ModalCard.container'
import PropTypes from  'prop-types'
import Label from '../containers/Label.container';

const Board = ({id, title, lists, members, labels, onDragEnd, teams}) => (
  <div className="m-3">
    <section>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <Row>
            <Col xs="4" >  
              <h5>Members:</h5>
            </Col>
          </Row>
          <Row>
            {
              members.map((member,ind)=> (
                <Col xs="2" className="p-2" key={ind}>
                  <div>
                  <Member memberId={member.id}></Member> 
                  </div>
                  
                </Col>
            </Row>
            </div>
        <ModalCard />
        </section>
    </div >
)

Board.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lists: PropTypes.arrayOf(ListPrelloCompo),
    members: PropTypes.array,
    onDragEnd: PropTypes.func.isRequired,
    teams: PropTypes.array
}

export default Board
