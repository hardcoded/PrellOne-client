import React from 'react';
import { Card, CardBody, CardText,Row } from 'reactstrap';
import Label from '../containers/Label.container'
import PropTypes from  'prop-types'

const CardPrello = ({id, title, labels, openModal})=>(
  <div>
    <Card outline className="mb-1" color="secondary" onClick={() => openModal(id)}>
      <CardBody className="p-2">
        <CardText tag="div" className="container">
          <Row>
            {
              labels.map(labelId => <Label labelId={labelId}></Label> )
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

CardPrello.propTypes={
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired
  
}
export default CardPrello