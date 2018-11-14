import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Alert, Container, Input, Button, Col, Form, FormGroup, Label } from 'reactstrap'

class Login extends React.Component {
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
        this.ldapLogin = this.ldapLogin.bind(this)
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
            this.props.history.push(`${user.username}/boards`)
        } 
        catch (error) { }
    }

    async ldapLogin() {
        this.props.history.push('/login/polytech')
    }

    render() {
        const { credential, password } = this.state
        return (
            <Container className="SignInUpForms">
                <h2>PrellOne login</h2>
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
                            <Label>Username or email</Label>
                            <Input
                                type="text"
                                name="credential"
                                id="exampleCredential"
                                placeholder="Username or email@prellone.fr"
                                autoComplete="email"
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
                    <Button onClick={this.submitForm} className="mt-2" >Submit</Button>
                </Form>
                <Button onClick={this.ldapLogin} className="mt-2" >Connect with Polytech account</Button>
                <Label>Don't have an account yet? <Link className="nav-link" to="/register">Sign up</Link></Label>
            </Container>
        );
    }
}

export default withRouter(Login)