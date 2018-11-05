import React from 'react';
import {Field, reduxForm} from 'redux-form' ;
import {Container, Input, Button, Col, Form, FormGroup, Label} from 'reactstrap'
import PropTypes from  'prop-types'

const SignIn = ({login}) => {

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
    <Container className="SignInUpForms">
    <h2>Sign In</h2>
      <Form className="form" onSubmit={() => login()}>
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

SignIn.propTypes={
  login: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'signIn'
})(SignIn)