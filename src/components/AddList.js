import React from 'react'
import { Button,Input, Row, Col } from 'reactstrap'
import PropTypes from  'prop-types'

const AddList = (newListTitle, isHidden, handleChange, handleSubmit, toggleHidden) => {

  return (
    <div>
      <Col  md="2" lg="3">
        {!isHidden && 
        <Input className="mb-2" name="newListTitle" id="newListTitle" placeholder="type the list title"  value={newListTitle} onChange={handleChange}/>}
        {!isHidden && 
        <Row>
            <Col>
                <Button color="success" block onClick={handleSubmit}>Add a list</Button>
            </Col>
            <Col>
                <Button color="danger" block  onClick={toggleHidden}>Cancel</Button>
            </Col>
        </Row>}
        {isHidden && 
        <Button outline color="primary" block onClick={toggleHidden}>Add another list</Button>}
        </Col>
    </div>
  )
}

AddList.PropTypes={
    newListTitle:PropTypes.string,
    isHidden:PropTypes.boolean,
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func,
    toggleHidden:PropTypes.func
}

export default AddList