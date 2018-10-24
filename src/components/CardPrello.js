import React from 'react';
import { Card, CardBody, CardText,Row } from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from '../containers/Label.container'
import ModalCard from '../containers/ModalCard.container'
import PropTypes from  'prop-types'

const CardPrello = ({id, index, title, labelIds, toggleModal})=>{
  return(
  <div>
  <ModalCard cardId = {id}></ModalCard>
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
        <Card outline className="mb-1" color="secondary" onClick={toggleModal}>
          <CardBody className="p-2">
            <CardText className="container">
              <Row>
                {labelIds.map(labelId => <Label labelId={labelId}></Label>)}
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
}

CardPrello.PropTypes={
  id:           PropTypes.number.isRequired,
  index:        PropTypes.number.isRequired,
  title:        PropTypes.string.isRequired,
  labelIds:     PropTypes.arrayOf(PropTypes.string),
  toggleModal:  PropTypes.func.isRequired,
}
export default CardPrello