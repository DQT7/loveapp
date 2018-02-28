import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import RLissues from '../../RTracker/RLissues';
import FDJournal from '../../RTracker/FDJournal'

import authService from '../../services/auth-service';

// on login, set the token using the auth service

class AuthModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      modal: true,
      signup: false,
      isEmpty:true,
    };


    this.toggle = this.toggle.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateSignUp = this.validateSignUp.bind(this);

  }
  handleSignUp(event){
    fetch("http://localhost:3000/api/user", {
      method: 'POST',
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      // use auth service here instead of this.props.setToken
      this.props.setToken(data.sessionToken)
      this.toggle()

    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleLogin(event) {
    fetch("http://localhost:3000/api/login", {
      method: 'POST',
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      // use auth service to set token here too
      this.props.setToken(data.sessionToken)
      this.toggle()


    })

    event.preventDefault()
  }
  validateSignUp(event) {
    this.setState({
        errorMessage:'Fields must not be empty'
    })
    event.preventDefault();
}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleSignUp() {
    if (this.state.signup === false) {
      return (
        <Form onSubmit={this.handleLogin} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Username</Label>
            <Input type="username" name="username" id="exampleEmail" placeholder=""onChange={this.handleChange} />
          </FormGroup>
          <br/>
          <br/>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Password" >Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password"onChange={this.handleChange} />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      )
    } else {
      return (
        <Form onSubmit={this.handleSignUp} >
          <FormGroup>

            <Label for="username" hidden>Username</Label>
            <Input type="text" name="username" id="username" placeholder="Username"onChange={this.handleChange} />
          </FormGroup>


          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleChange}/>
          </FormGroup>
          {' '}
          <FormGroup>

            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password"onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <br />
          <Button >Submit</Button>
        </Form>

      )
    }
  }
  render() {

    const bName= this.state.signup === false ? "Sign Up" : "Login"
    const mName= this.state.signup === !false ? "Sign Up": "Login"
    const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
    return (
      <div>
        <Button color="pink"id="move" onClick={this.toggle}><b>Register Here</b></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>
          {mName}
          </ModalHeader>
          <ModalBody>
            {this.toggleSignUp()}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.setState({ signup: !this.state.signup })}>
             {bName}
            </Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    );
  }

}

export default AuthModal;
