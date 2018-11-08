import React from 'react'
import { withRouter } from 'react-router-dom'
import { Alert, Container, Input, Button, Col, Form, FormGroup, Label, FormFeedback } from 'reactstrap'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            validate: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            focus: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.toggleFocus = this.toggleFocus.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const { validate } = this.state
        validate.email = emailRex.test(e.target.value) ? 'has-success' : 'has-danger'
        this.setState({ validate })
    }

    validateForm() {
        let error = false
        const { validate } = this.state
        validate.firstname = this.state.firstname === '' ? 'has-danger' : ''
        validate.lastname = this.state.lastname === '' ? 'has-danger' : ''
        validate.email = this.state.email === '' ? 'has-danger' : ''
        validate.password = this.state.password === '' ? 'has-danger' : ''
        error = this.state.firstname === '' || this.state.lastname === '' || this.state.password === ''
        this.setState({ validate })
        return !error
    }

    handleChange(event) {
        const { name, value } = event.target
        const { validate } = this.state
        if(name !== 'email') validate[name] = ''
        this.setState({
            [name]: value,
            validate
        })
    }

    toggleFocus() {
        const focus = !this.state.focused
        this.setState({ focused: focus })
    }

    async submitForm() {
        if(this.validateForm()) {
            try {
                const { username, firstname, lastname, email, password } = this.state
                await this.props.register(username, firstname, lastname, email, password)
                this.props.history.push(`/login`)
            }
            catch (error) {}
        }
    }

    render() {
        const { username, firstname, lastname, email, password } = this.state
        return (
            <Container className="SignInUpForms">
                <h2>Create your account</h2>
                <Form className="form">
                    {console.log(this.props.error)}
                    {this.props.error &&
                        <Alert color="danger">
                            {this.props.error}
                        </Alert>
                    }
                    {this.props.waiting &&
                        <Alert color="info">
                            {this.props.waiting}
                        </Alert>
                    }
                    <Col>
                        <FormGroup>
                            <Label>First name *</Label>
                            <Input
                                type="text"
                                name="firstname"
                                id="exampleFirstName"
                                placeholder="First name"
                                value={firstname}
                                invalid={this.state.validate.firstname === 'has-danger'}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback invalid>
                                Please fill in this field
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Last name *</Label>
                            <Input
                                type="text"
                                name="lastname"
                                id="exampleLastName"
                                placeholder="Last name"
                                value={lastname}
                                invalid={this.state.validate.lastname === 'has-danger'}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback invalid>
                                Please fill in this field
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="exampleUsername"
                                placeholder="FancyUsername"
                                value={username}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email *</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="email@prellone.com"
                                value={email}
                                valid={this.state.validate.email === 'has-success'}
                                invalid={this.state.validate.email === 'has-danger'}
                                onChange={(e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                }}
                                onFocus={this.toggleFocus}
                                onBlur={this.toggleFocus}
                            />
                            {this.state.focused && 
                                <FormFeedback valid>
                                    This email is looking good!
                                </FormFeedback>
                            }
                            {this.state.email === '' &&
                                <FormFeedback invalid>
                                        Please fill in this field
                                </FormFeedback>
                            }
                            {this.state.email !== '' &&
                                <FormFeedback invalid>
                                        Doesn't look like an email!
                                </FormFeedback>
                            }
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password *</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                invalid={this.state.validate.password === 'has-danger'}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <FormFeedback invalid>
                                Please fill in this field
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Button onClick={this.submitForm} className="mt-2" >Submit</Button>
                </Form>
                <Label>* required</Label>
            </Container>
        );
    }
}

export default withRouter(Register)