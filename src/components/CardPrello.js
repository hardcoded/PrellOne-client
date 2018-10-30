import React from 'react';
import { Card, CardBody, CardText,Row } from 'reactstrap';
import PropTypes from  'prop-types'

const CardPrello = ({title})=>(
  <div>
    <Card outline className="mb-1" color="secondary">
      <CardBody className="p-2">
        <CardText tag="div" className="container">
          <Row>
            {title}
          </Row>
        </CardText>
      </CardBody>
    </Card>
</div>
  )

CardPrello.propTypes={
  title:PropTypes.string.isRequired,
  
}
export default CardPrello