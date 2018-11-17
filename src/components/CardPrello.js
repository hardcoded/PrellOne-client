import React from 'react';
import { Card, CardBody, CardText,Row } from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import Label from '../containers/Label.container'
import PropTypes from  'prop-types'

const CardPrello = ({id, title, labels, index, openModal}) => (
  <Draggable draggableId={id} index={index}>
    {
      (provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
        <Card outline className="mb-1" color="secondary" onClick={() => openModal(id)}>
          <CardBody className="p-2">
            <CardText tag="div" className="container">
              <Row>
                { labels &&
                  labels.map(labelId => <Label key={labelId} size="10" labelId={labelId}></Label> )
                }    
              </Row>
              <Row>
                {title}
              </Row>
            </CardText>
          </CardBody>
        </Card>
        </div>
      )
    }
    
  </Draggable>
)

CardPrello.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  index: PropTypes.number,
  openModal: PropTypes.func.isRequired
  
}
export default CardPrello