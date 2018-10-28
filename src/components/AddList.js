import React from 'react';
import { Form,FormGroup,Input, Button, Label} from 'reactstrap';
import PropTypes from  'prop-types'

const AddList = ({boardId, addList})=> {
  let newListTitle = ""

  function handleChange(event) {
    newListTitle = event.target.value
  }

  return (
    <Form>
      <FormGroup>
        <Label for="list">add new list</Label>
        <Input  name="list" id="newList" placeholder="Title" onChange={handleChange}/>
      </FormGroup>
      <button type="button" onClick={() => addList}>Submit</button>
    </Form>
  );
}
 

AddList.propTypes={
  boardId: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired
}

export default AddList