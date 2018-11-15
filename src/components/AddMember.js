import React from 'react';
import PropTypes from  'prop-types'
import { Col, InputGroup, InputGroupAddon,Button } from 'reactstrap'

const AddMember = ({ teamId, boardId, cardId, addMemberTeam, addMemberBoard, hidden, hideAddMemberTeam, showAddMemberTeam, hideAddMemberBoard, showAddMemberBoard, addMemberCard, hideAddMemberCard, showAddMemberCard})=> {
  let input
  if (!hidden) {
    return (
      <Col xs="3" className="mb-2">
        <button type="button" className="btn btn-primary btn-circle" onClick={() => {
          if(teamId) showAddMemberTeam(teamId)
        else if(boardId) showAddMemberBoard(boardId)
        else if(cardId) showAddMemberCard(cardId)
        }}>&#43;</button>
      </Col>
    )
  }
  else {
    return (
      <Col xs="12" sm="10" md="8" lg="3" className="pt-3">
        <form onSubmit={e => {
          e.preventDefault()
          if (teamId) addMemberTeam(teamId, input.value)
          else if (boardId) addMemberBoard(boardId, input.value)
          else if (cardId) addMemberCard(cardId, input.value)
          input.value = ''
        }}>
          <InputGroup>
            <input className="form-control" placeholder="Type a username"  ref={node => input = node} />
            <InputGroupAddon addonType="append">
              <Button color="success" type="submit" className="pl-3 pr-3">&#43;</Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
              <Button color="danger" onClick={() => {
                if(teamId) hideAddMemberTeam(teamId)
              else if(boardId) hideAddMemberBoard(boardId)
              else if(cardId) hideAddMemberCard(cardId)}} className="pl-3 pr-3">&#10005;</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Col>
    )
  }
}

AddMember.propTypes={
  teamId: PropTypes.string,
  boardId: PropTypes.string,
  cardId: PropTypes.string,
  addMemberTeam: PropTypes.func.isRequired,
  addMemberBoard: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
  showAddMemberTeam: PropTypes.func.isRequired,
  hideAddMemberTeam: PropTypes.func.isRequired,
  hideAddMemberBoard: PropTypes.func.isRequired,
  showAddMemberBoard: PropTypes.func.isRequired,
  addMemberCard: PropTypes.func.isRequired,
  hideAddMemberCard: PropTypes.func.isRequired,
  showAddMemberCard: PropTypes.func.isRequired
}

export default AddMember