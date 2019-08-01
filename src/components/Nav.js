import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Nav extends Component {
  
  render() {
    return (
        <Container>
          <Row classID="headerClass">
          <Col xs="8">Clicky</Col>
          <Col xs="2">{'score'}</Col>
          <Col xs="2">{'topScore'}</Col>
        </Row>
        </Container>
    )
  }
}
export default Nav;