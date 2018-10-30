import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import PropTypes from  'prop-types'

const ModalPrello = ({modal, title, description, closeModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody>
          <h5>Description</h5>
          <p>{description}</p>
          <h5>Members</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

ModalPrello.propTypes={
  closeModal: PropTypes.func.isRequired
  
}
export default ModalPrello