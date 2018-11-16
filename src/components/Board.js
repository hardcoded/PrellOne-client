import React from 'react'
import Member from '../containers/Member.container'
import Team from '../containers/Team.container'
import AddMember from '../containers/AddMember.container'
import AddTeamBoard from '../containers/AddTeamBoard.container'
import ListPrello from '../containers/ListPrello.container'
import ListPrelloCompo from '../components/ListPrello'
import AddList from '../containers/AddList.container'
import { Row, Col } from 'reactstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import ModalCard from '../containers/ModalCard.container'
import PropTypes from  'prop-types'

const Board = ({id, title, lists, members, onDragEnd, teams}) => (

    <div>
      <section>
        <div className="container-fluid mt-4">
        <Row className="scrolling-wrapper-flexbox">
            <Col xs="12" sm="6" md="4" lg="3">
              <h1>{title}</h1>
              
              <h5>Members</h5>
              <Row>
              {
                members.map(member => (
                  <Col xs="3" className="p-2">
                    <Member memberId={member.id}></Member> 
                  </Col>
                ))
              }
              <AddMember idBoard={id}></AddMember>
              </Row>
              <h5>Teams</h5>
              <Row>
              {
                teams.map(team => (
                  <Col xs="3" className="p-2">
                    {team.name}
                  </Col>
                ))
              }
              <AddTeamBoard idBoard={id}></AddTeamBoard>
              </Row>

            </Col>
          <DragDropContext onDragEnd={onDragEnd}>
            {
              lists.map((list, index) => (
              <Col xs="12" sm="6" md="4" lg="3" key={index}>
              <ListPrello id={list.id}></ListPrello>
              </Col>
            ))}
          </DragDropContext>
          <Col xs="12" sm="6" md="4" lg="3">
            <AddList boardId={id}></AddList>
          </Col>
        </Row>
        </div>
        <ModalCard/>
      </section>
    </div>
)


Board.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  lists:PropTypes.arrayOf(ListPrelloCompo),
  members: PropTypes.array,
  onDragEnd: PropTypes.func.isRequired,
  teams: PropTypes.array
}

export default Board
