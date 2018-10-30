import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import PropTypes from  'prop-types'

const ModalPrello = ({modal, title, description, closeModal, openModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody>
          <h5>{description}</h5>
          <p>Micro</p>
          <h5>Members</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

ModalPrello.propTypes={
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
  
}
export default ModalPrello