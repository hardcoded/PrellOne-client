import React from 'react';
import { Form,FormGroup,Input,Button } from 'reactstrap';
import PropTypes from  'prop-types'

const addList = ({addList})=>
 (
    <Form onSubmit={}>
      <FormGroup>
        <Label for="list">add new list</Label>
        <Input  name="list" id="newList" placeholder="with a placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );

addList.propTypes={
  addList:PropTypes.func.isRequired
}
export default addList