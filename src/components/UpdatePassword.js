import React from 'react'
import { withRouter } from 'react-router-dom'
import {Container, Input, Button, Col, Form, FormGroup, Label, FormFeedback} from 'reactstrap'

class UpdatePassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPwd: '',
            newPwd: '',
            newPwd2: '',
            validate: {
                passwordMatch: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.passwordMatch = this.passwordMatch.bind(this)
        this.keyDown = this.keyDown.bind(this)
        this.submitForm = this.submitForm.bind(this)

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

    passwordMatch(event) {
        const { value } = event.target
        const { validate } = this.state
        validate.passwordMatch = (value === this.state.newPwd2) ? 'has-success' : 'has-danger'
    }

    async submitForm() {
        if (this.state.validate.passwordMatch !== 'has-danger') {
            try {
                await this.props.updatePassword(this.props.user.id, this.state.oldPwd, this.state.newPwd)
            } 
            catch (error) { }
        }
    }

    render() {
        const { oldPwd, newPwd, newPwd2 } = this.state
        return (
            <Container className="SignInUpForms">
                <h2>Change password</h2>
                <Form className="form">
                    <Col>
                    <FormGroup>
                        <Label className="mr-sm-2">Current password</Label>
                        <Input
                         type="password" 
                         name="oldPwd" 
                         value={oldPwd}
                         placeholder="Current password"
                         onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label className="mr-sm-2">New password</Label>
                        <Input
                        type="password" 
                        name="newPwd" 
                        value={newPwd}
                        placeholder="New password"
                        onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label className="mr-sm-2">New password repeated</Label>
                        <Input 
                        type="password"
                        name="newPwd2"
                        value={newPwd2}
                        placeholder="New password repeated" 
                        onKeyDown={this.keyDown}
                        valid={this.state.validate.passwordMatch === 'has-success'}
                        invalid={this.state.validate.passwordMatch === 'has-danger'}
                        onChange={
                            (e) => {
                                this.handleChange(e)
                                this.passwordMatch(e)
                            }
                        }/>
                        <FormFeedback valid>
                            It's a match!
                        </FormFeedback>
                        <FormFeedback invalid>
                            Confirmation needs to matchpassword!
                        </FormFeedback>
                    </FormGroup>
                    </Col>
                    <Button onClick={this.submitForm} className="mt-2" >Change password</Button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(UpdatePassword)