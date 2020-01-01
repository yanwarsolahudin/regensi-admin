import React, { Component } from "react";
import {LoginForm, RegisterForm, ProvideBy} from './components';
import { Container, Tab, Nav, Col, Row, Card } from 'react-bootstrap';
import './styles.css';


export default class AppAuthentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabKey: 'render-login'
    };

    this.onTab = this.onTab.bind(this);
  }

  onTab(eventKey) {
    if (eventKey === 'render-login') {
      this.setState({tabKey: 'render-login'})
    } else {
      this.setState({tabKey: 'render-register'})
    }
  }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <h4 className="text-center mb-4 text-primary">
                Regensi <br/>
                <small className="text-muted">Free Stock Management Software</small>
              </h4>
              <Card>
                <Card.Body>
                  <Tab.Container id="left-tabs-example" activeKey={this.state.tabKey} onSelect={this.onTab}>
                    <Row>
                      <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="render-login">Login</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="render-register">Register</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="render-login">
                            <LoginForm className="my-4" />
                          </Tab.Pane>
                          <Tab.Pane eventKey="render-register">
                            <RegisterForm className="my-4" />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Card.Body>
              </Card>
              <ProvideBy />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}