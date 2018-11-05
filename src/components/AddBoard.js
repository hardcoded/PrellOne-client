import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from 'reactstrap';
import PropTypes from  'prop-types'
import team from '../reducers/team.reducer';

const AddBoard = ({id,modal, closeModalCreateBoard, addBoard})=> {
  let titleBoard
  return (
  <div>
    <form>
    <Modal toggle={closeModalCreateBoard} isOpen={modal}  >

        <ModalHeader toggle={closeModalCreateBoard}>
        Create a new board  
        </ModalHeader>

        <ModalBody className="container-fluid">
        <label>Title:</label>
        <input className="mb-2 form-control" placeholder="Add the title of the new board"  ref={node => titleBoard = node} />
        <label>Team:</label>
        <Input type="select">
          <option>Team 1 </option>
        </Input>
        </ModalBody>
        <ModalFooter>
          <Button block color="success" type="submit" onClick={e => {e.preventDefault()
            addBoard(titleBoard.value,id)
            titleBoard.value = ''
          }}>Create board</Button>
          <Button color="danger" onClick={closeModalCreateBoard}>Cancel</Button>
        </ModalFooter>
   </Modal>
   </form>
</div>
  );
}

AddBoard.propTypes={
    id:PropTypes.string,
    closeModalCreateBoard: PropTypes.func.isRequired,
    modal: PropTypes.bool,
    addBoard: PropTypes.func.isRequired,
  
}
export default AddBoard