import React from 'react';
import {Field, reduxForm} from 'redux-form' ;
import {Container, Input, Button, Col, Form, FormGroup, Label} from 'reactstrap'
import PropTypes from  'prop-types'

const validate = values => {
  const errors = {}
  if (!values.userName) {
    errors.userName = 'Required'
  } else if (values.userName.length < 2) {
    errors.userName = 'Must be 2 characters or more'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 2 characters or more'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 2 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }
  return errors
}

const SignUp = ({handleSubmit}) => {

  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <Input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  return (
    <Container className="SignInUpForms">
    <h2>Sign Up</h2>
      <Form className="form" onSubmit={() => handleSubmit()}>
      <Col>
      <FormGroup>
      <Label>User name</Label>
          <Field 
            name='userName'
            type="text" 
            component={renderField}
          />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
          <Label>First name</Label>
          <Field 
            name='firstName' 
            type="text"
            component={renderField}
          />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label>Last name</Label>
          <Field 
            name='lastName'
            type="text"
            component={renderField}
          />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label>Email</Label>
          <Field 
            name='email'
            type="email"
            component={renderField}
          />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label>Password</Label>
          <Field 
            name='password'
            type="password"
            component={renderField}
          />
          </FormGroup>
          </Col>
        <Button type='submit' className="mt-2" >Submit</Button>
      </Form>
    </Container>
  );
}

SignUp.propTypes={
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'signUp',
  validate
})(SignUp)