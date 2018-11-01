import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import PropTypes from  'prop-types'

const AddBoard = ({closeModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>
        <input className="mb-2 form-control" placeholder="Add a title to the board"  ref={node => input = node} />
        </ModalHeader>
        <ModalBody className="container-fluid">
        <Input type="select">
          <option> Mettre les teams </option>
        </Input>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

AddBoard.propTypes={
    closeModal: PropTypes.func.isRequired
  
}
export default AddBoard