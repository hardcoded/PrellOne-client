import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import Member from '../containers/Member.container'
import PropTypes from  'prop-types'

const ModalPrello = ({modal, title, description, memberIds, closeModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody>
          <h5>Description</h5>
          <p>{description}</p>
          <h5>Members</h5>
          <Row>
            {
              memberIds && memberIds.map(memberId => 
                <Col xs="2" className="p-2">
                  <Member memberId={memberId}></Member>
                </Col>
              )
            }
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
   </Modal>
</div>
  )

ModalPrello.propTypes={
  modal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  memberIds: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired
  
}
export default ModalPrello