import React from 'react';
import {Field, reduxForm} from 'redux-form' ;
import {Container, Form, FormGroup, Input, Button} from 'reactstrap'
import PropTypes from  'prop-types'

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
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  return (
    <Container>
      <Form onSubmit={() => handleSubmit()}>
        <FormGroup>
          <Field 
            name='userName'
            type="text" 
            component={renderField}
            label="Username"
          />
        </FormGroup>
        <FormGroup>
          <Field 
            name='firstName' 
            type="text"
            component={renderField}
            label="First name"
          />
        </FormGroup>
        <FormGroup>
          <Field 
            name='lastName'
            type="text"
            component={renderField}
            label="Last name"
          />
        </FormGroup>
        <FormGroup>
          <Field 
            name='email'
            type="email"
            component={renderField}
            label="E-mail"
          />
        </FormGroup>
        <FormGroup>
          <Field 
            name='password'
            type="password"
            component={renderField}
            label="Password"
          />
        </FormGroup>
        <Button fluid type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

SignUp.propTypes={
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'signUp'
})(SignUp)