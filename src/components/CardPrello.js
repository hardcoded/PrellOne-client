import React from 'react';
import { Card, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input} from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from './Label'
import PropTypes from  'prop-types'

const CardPrello = ({id,title,desc,members,labels,toggle,modal })=>(
  <div>
  <Modal isOpen={modal} toggle={toggle} className={this.state.className}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>
      <h5>Description</h5>
      <p>{desc}</p>
      <h5>Members</h5>
      <p>{members}</p>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
  <Draggable draggableId={id} index={this.state.index}>
    {(provided) => (
      <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
        <Card outline className="mb-1" color="secondary" onClick={toggle}>
          <CardBody className="p-2">
            <CardText className="container">
              <Row>
                {labels.map(label => <Label label={label}></Label> )}
              </Row>
              <Row>
                {title}
              </Row>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )}
  </Draggable>
</div>
)

CardPrello.PropTypes={
  title:PropTypes.string.isRequired,
  desc:PropTypes.string,
  members:PropTypes.arrayOf(PropTypes.string),
  labels:PropTypes.arrayOf(Label),
  toggle:PropTypes.func.isRequiredl,
  modal:Modal
}
export default CardPrello