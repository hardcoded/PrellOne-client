import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import PropTypes from  'prop-types'

const ModalPrello = ({closeModal, openModal})=>(
  <div>
    <Modal isOpen={openModal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>Test</ModalHeader>
        <ModalBody>
          <h5>Description</h5>
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
  title:PropTypes.string.isRequired,
  description: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
  
}
export default ModalPrello