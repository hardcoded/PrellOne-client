import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Alert, Container, Input, Button, Col, Form, FormGroup, Label, Row } from 'reactstrap'

class LoginLdap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credential: '',
            password: '',
            focused: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.keyDown = this.keyDown.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    keyDown(event) {
        if (event.key === "Enter" && event.keyCode === 13) this.submitForm()
    }

    async submitForm() {
        try {
            const user = await this.props.login(this.state.credential, this.state.password)
            this.props.history.push(`/${user.username}/boards`)
        }
        catch (error) { }
    }

    render() {
        const { credential, password } = this.state
        return (
            <Container className="SignInUpForms">
                <h2 className="loginTitle">Polytech login</h2>
                <Form className="form">
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
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="credential"
                                id="exampleCredential"
                                placeholder="firstname.lastname"
                                autoComplete="username"
                                autoFocus={true}
                                value={credential}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                autoComplete="password"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                                onKeyDown={this.keyDown}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.submitForm} className="mt-2" color="primary">Submit</Button>
                </Form>
                <Row style={{ marginLeft: '5px', marginTop: '5px'}}>
                    <Label>Login with your <Link style={{ padding: '0px', marginLeft: '5px', marginRight: '5px' }} to="/login"> PrellOne </Link> account</Label>
                </Row>
                <Row style={{ marginLeft: '5px', marginTop: '5px'}}>
                    <Label>Don't have an account yet? <Link style={{ padding: '0px', marginLeft: '5px', marginRight: '5px' }} to="/register"> Sign up </Link></Label>
                </Row>
            </Container>
        );
    }
}

export default withRouter(LoginLdap)