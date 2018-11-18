import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Input, Button, Col, Form, FormGroup, Label, Alert } from 'reactstrap'

class Developer extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {
            clientName: '',
            redirectUri: '',
            focused: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.keyDown = this.keyDown.bind(this)
    }

    componentWillUnmount() {
        this.props.clear()
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
            const dev = await this.props.register(this.state.clientName, this.state.redirectUri)
        }
        catch (error) { }
    }

    render() {
        const { clientName, redirectUri } = this.state
        return (
            <Container className="SignInUpForms">
                <h2>OAuth client register</h2>
                <Form className="form">
                    {this.props.waiting &&
                        <Alert color="info">
                            {this.props.waiting}
                        </Alert>
                    }
                    <Col>
                        <FormGroup>
                            <Label>Client name</Label>
                            <Input
                                type="text"
                                name="clientName"
                                id="exampleClientName"
                                placeholder="OAuth client name"
                                autoComplete="username"
                                value={clientName}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Redirect URI</Label>
                            <Input
                                type="text"
                                name="redirectUri"
                                id="exampleRedirectUri"
                                placeholder="hhtp://myfancyuri.com/whatever"
                                value={redirectUri}
                                onChange={(e) => this.handleChange(e)}
                                onKeyDown={this.keyDown}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.submitForm} className="mt-2" >Submit</Button>
                </Form>

                {this.props.clientID && this.props.clientSecret &&
                    <div>
                        <p>Your client ID : {this.props.clientID} </p>
                        <p>Your client secret : {this.props.clientSecret} </p>
                    </div>
                }

            </Container>
        );
    }
}

export default withRouter(Developer)