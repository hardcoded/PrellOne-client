import React from 'react'
import { withRouter } from 'react-router-dom'
import {Container, Input, Button, Col, Form, FormGroup, Label, FormFeedback, Row} from 'reactstrap'
import { Link } from 'react-router-dom'

class UpdateInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            validate: {
                firstname: '',
                lastname: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.keyDown = this.keyDown.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.validateForm = this.validateForm.bind(this)

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

    
    validateForm() {
        let error = false
        const { validate } = this.state
        validate.firstname = this.state.firstname === '' ? 'has-danger' : ''
        validate.lastname = this.state.lastname === '' ? 'has-danger' : ''
        error = this.state.firstname === '' || this.state.lastname === ''
        this.setState({ validate })
        return !error
    }

    async submitForm() {
        if (this.validateForm()) {
            try {
                await this.props.updateInfo(this.props.user.id, this.state.firstname, this.state.lastname)
            } 
            catch (error) { }
        }
    }

    render() {
        const { firstname, lastname } = this.state
        return (
            <Container className="SignInUpForms">
                <h2>Change information</h2>
                <Form className="form">
                    <Col>
                    <FormGroup>
                        <Label className="mr-sm-2">First name</Label>
                        <Input
                         type="text" 
                         name="firstname" 
                         value={firstname}
                         placeholder="First name"
                         onChange={(e) => this.handleChange(e)} 
                         invalid={this.state.validate.firstname === 'has-danger'}/>
                    <FormFeedback invalid>
                         Please fill in this field
                    </FormFeedback>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label className="mr-sm-2">Last name</Label>
                        <Input
                        type="text" 
                        name="lastname" 
                        value={lastname}
                        placeholder="Last name"
                        onChange={(e) => this.handleChange(e)} 
                        invalid={this.state.validate.lastname === 'has-danger'}/>
                    <FormFeedback invalid>
                         Please fill in this field
                    </FormFeedback>
                    </FormGroup>
                    </Col>
                    <Row>
                        <Col xs="6">
                    <Button block onClick={this.submitForm} className="mt-2" >Change info</Button>
                    </Col>
                    <Col >
                    <Button block className="mt-2">
                        <Link  to={`/${this.props.user.username}/account`} >
                        Return
                        </Link>   
                    </Button>
                    </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default withRouter(UpdateInfo)