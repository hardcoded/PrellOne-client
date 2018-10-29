import React from 'react';
import { Form,FormGroup,Input, Label} from 'reactstrap';
import PropTypes from  'prop-types'

const AddList = ({boardId, addList})=> {
  let input


  return (
    <Form onSubmit={e => {e.preventDefault()
      addList(boardId, input.value)
      input.value = ''
    }}>
      <FormGroup>
        <Label for="list">add new list</Label>
        <Input placeholder="Title"  ref={node => input = node}/>
      </FormGroup>
      <button type="submit">Submit</button>
    </Form>
  );
}
 

AddList.propTypes={
  boardId: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired
}

export default AddList