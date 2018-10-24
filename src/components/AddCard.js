import React from 'react'
import { Button,Input, Row, Col } from 'reactstrap'
import PropTypes from  'prop-types'


const AddCard=(addCard, hide)=>{
    return(
        <div>
            <Input className="mb-2" name="newCardTitle" id="newCardTitle" placeholder="type the card title"  value={newCardTitle}/>
            <Row>
                <Col>
                    <Button outline color="primary" block onClick={addCard}>Add another card</Button>
                </Col>
                <Col>
                    <Button color="danger" block  onClick={hide()}>Cancel</Button>
                </Col>
            </Row>
        </div>
    )
}
AddCard.PropTypes={
    addCard:  PropTypes.func,
    hide:  PropTypes.func
  }
  export default AddCard