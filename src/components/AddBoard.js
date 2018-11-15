import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Team from '../components/Team'

const AddBoard = ({id,modal, owner, closeModalCreateBoard, addBoard,team})=> {
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
        <input className="mb-2 form-control" placeholder="Add the title of the new board"  ref={node => titleBoard = node} autoFocus={true} />
        </ModalBody>
        <ModalFooter>
          <Button block color="success" type="submit" onClick={e => {e.preventDefault()
            addBoard(titleBoard.value,owner,team)
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
    owner: PropTypes.string,
    addBoard: PropTypes.func.isRequired,
    team: PropTypes.object
}
export default AddBoard