import React, { Component } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { serviceLogin, serviceRegister } from './services';


export class ProvideBy extends Component {
  render() {
    return (
      <>
        <p className="text-muted text-center mt-4">
          <small>
            Copyright Regensi 2019<br/>
            By Bageen
          </small>
        </p>
      </>
    );
  }
}

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isRenderError: false,
      messageError: ''
    };

    this.onLogin = this.onLogin.bind(this);
    this.onSetStatePassword = this.onSetStatePassword.bind(this);
    this.onSetStateUsername = this.onSetStateUsername.bind(this);
    this.onResetError = this.onResetError.bind(this);
    
    this.renderMain = this.renderMain.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  onResetError() {
    return this.setState({isRenderError: false, messageError: ''});
  }

  onLogin() {
    this.onResetError();
    serviceLogin(this.state.username, this.state.password)
      .then(response => {
        localStorage.setItem('regensiToken', response.data.token);
        localStorage.setItem('regensiUsername', response.data.username);
        localStorage.setItem('regensiEmail', response.data.email);
      })
      .catch(err => {
        this.setState({isRenderError: true, messageError: err.toString()});
      });
  }

  onSetStateUsername(event) {
    event.preventDefault();
    this.setState({username: event.target.value});
  }

  onSetStatePassword(event) {
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  renderMain() {
    return (
      <>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control value={this.state.username} onChange={this.onSetStateUsername} type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={this.state.password} onChange={this.onSetStatePassword} type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={this.onLogin} variant="primary">
          Login
        </Button>
      </>
    )
  }

  renderError() {
    return (
      <>
        <Card bg="warning">
          <Card.Body>
            <p>{this.state.messageError}</p>
            <Button onClick={this.onResetError} variant="light">
              Back To Login
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
 
  render() {
    if (this.state.isRenderError) {
      return this.renderError()
    } 
    return this.renderMain();
  }
}


export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      isRenderError: false,
      isRenderSuccess: false,
      messageError: ''
    };

    this.onRegister = this.onRegister.bind(this);
    this.onResetError = this.onResetError.bind(this);
    this.onResetSuccess = this.onResetSuccess.bind(this);
    this.onSetStateUsername = this.onSetStateUsername.bind(this);
    this.onSetStatePassword = this.onSetStatePassword.bind(this);
    this.onSetStateEmail = this.onSetStateEmail.bind(this);

    this.renderError = this.renderError.bind(this);
    this.renderMain = this.renderMain.bind(this);
  }

  onResetError() {
    this.setState({
      isRenderError: false,
      messageError: ''
    });
  }

  onResetSuccess() {
    this.setState({
      isRenderSuccess: false
    });
  }

  onRegister() {
    this.onResetError();
    this.onResetSuccess();

    serviceRegister(
      this.state.username,
      this.state.email,
      this.state.password
    )
      .then(response => {
        this.setState({isRenderSuccess: true, isRenderError: false, messageError: ''});
      })
      .catch(err => {
        this.setState({
          isRenderError: true,
          isRenderSuccess: false,
          messageError: err.toString()
        });
      });
  }

  onSetStateUsername(event) {
    event.preventDefault();
    this.setState({username: event.target.value});
  }

  onSetStatePassword(event) {
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  onSetStateEmail(event) {
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  renderError() {
    return (
      <>
        <Card bg="warning">
          <Card.Body>
            <p>{this.state.messageError}</p>
            <Button onClick={this.onResetError} variant="light">
              Back
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }

  renderSuccess() {
    return (
      <>
        <Card bg="primary">
          <Card.Body>
            <p className="text-light">
              You have successfully registered. 
              Please login by pressing the login tab.
            </p>
          </Card.Body>
        </Card>
      </>
    );
  }

  renderMain() {
    return (
      <>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control value={this.state.username} onChange={this.onSetStateUsername} type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control value={this.state.email} onChange={this.onSetStateEmail} type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control value={this.state.password} onChange={this.onSetStatePassword} type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={this.onRegister} variant="primary">
          Register
        </Button>
      </>
    );
  }

  render() {
    if (this.state.isRenderError) {
      return this.renderError();
    } else if (this.state.isRenderSuccess) {
      return this.renderSuccess();
    } else {
      return this.renderMain();
    }
  }
}