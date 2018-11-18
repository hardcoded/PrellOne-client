import React from 'react';
import PropTypes from  'prop-types'
import { Col, InputGroup, InputGroupAddon,Button,Row} from 'reactstrap'

const AddMember = ({ teamId, boardId, cardId, addMemberTeam, addMemberBoard, hidden, hideAddMemberTeam, showAddMemberTeam, hideAddMemberBoard, showAddMemberBoard})=> {
  let input
  if (!hidden) {
    return (
      <Col xs="2" className="p-2"> 
        <button type="button" className="btn btn-primary btn-circle" onClick={() => {
          if(teamId) showAddMemberTeam(teamId)
        else if(boardId) showAddMemberBoard(boardId)
        }}>&#43;</button>
         </Col> 
    )
  }
  else {
    return (

        <form onSubmit={e => {
          e.preventDefault()
          if (teamId) addMemberTeam(teamId, input.value)
          else if (boardId) addMemberBoard(boardId, input.value)
          input.value = ''
        }}>
          <InputGroup>
            <input className="form-control" placeholder="Type a username"  ref={node => input = node} autoFocus={true} />
            <Row>
            <InputGroupAddon addonType="append">
              <Button color="success" type="submit" className="pl-3 pr-3">&#43;</Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
              <Button color="danger" onClick={() => {
                if(teamId) hideAddMemberTeam(teamId)
              else if(boardId) hideAddMemberBoard(boardId)}} className="pl-3 pr-3">&#10005;</Button>
            </InputGroupAddon>
            </Row>
          </InputGroup>
        </form> 
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
  showAddMemberBoard: PropTypes.func.isRequired
}

export default AddMember