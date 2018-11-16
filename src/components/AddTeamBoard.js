import React from 'react';
import PropTypes from  'prop-types'
import { Col, InputGroup, InputGroupAddon,Button } from 'reactstrap'

const AddTeamBoard = ({ boardId, addTeamBoard, hidden, hideAddTeamBoard, showAddTeamBoard})=> {
  let input
  if (!hidden) {
    return (
      <Col xs="3" className="mb-2">
        <button type="button" className="btn btn-primary btn-circle" onClick={() => {
        showAddTeamBoard(boardId)
        }}>&#43;</button>
      </Col>
    )
  }
  else {
    return (
      <Col xs="12" sm="10" md="8" lg="3" className="pt-3">
        <form onSubmit={e => {
          e.preventDefault()
          addTeamBoard(boardId, input.value)
          input.value = ''
        }}>
          <InputGroup>
            <input className="form-control" placeholder="Type a username"  ref={node => input = node} />
            <InputGroupAddon addonType="append">
              <Button color="success" type="submit" className="pl-3 pr-3">&#43;</Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
              <Button color="danger" onClick={() => {
                hideAddTeamBoard(boardId)}} className="pl-3 pr-3">&#10005;</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Col>
    )
  }
}

AddTeamBoard.propTypes={
  boardId: PropTypes.string,
  addTeamBoard: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
  hideAddTeamBoard: PropTypes.func.isRequired,
  showAddTeamBoard: PropTypes.func.isRequired,
}

export default AddTeamBoard