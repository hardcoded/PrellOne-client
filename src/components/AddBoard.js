import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from 'reactstrap';
import PropTypes from  'prop-types'

const AddBoard = ({modal, closeModalCreateBoard})=> (

  <div>
    <Modal toggle={closeModalCreateBoard} isOpen={modal}  >
        <ModalHeader toggle={closeModalCreateBoard}>
        <input className="mb-2 form-control" placeholder="Add a title to the board"/>
        </ModalHeader>
        <ModalBody className="container-fluid">
        <Input type="select">
          <option> Mettre les teams </option>
        </Input>
        </ModalBody>
        <ModalFooter>
          <Button color="success">Create board</Button>
        </ModalFooter>
   </Modal>
</div>
)

AddBoard.propTypes={
    closeModalCreateBoard: PropTypes.func.isRequired,
    modal: PropTypes.bool,
  
}
export default AddBoard