import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import Member from '../containers/Member.container'
import Label from '../containers/Label.container'
import PropTypes from  'prop-types'

const ModalPrello = ({modal, title, description, labelIds, memberIds, closeModal})=>(
  <div>
    <Modal isOpen={modal} toggle={closeModal} >
        <ModalHeader toggle={closeModal}>{title}</ModalHeader>
        <ModalBody className="container-fluid">
          <h5>Labels</h5>
          <Row className="pl-3 mb-3">
            {
              labelIds && labelIds.map(labelId => 
                <Col xs="auto" className="p-0">
                  <Label labelId={labelId}></Label>
                </Col>
              )
            }
          </Row>
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
  labelIds: PropTypes.array.isRequired,
  memberIds: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired
  
}
export default ModalPrello