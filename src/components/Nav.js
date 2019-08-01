import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
        <Container>
            <Row>
          <Col xs="3">Clicky</Col>
          <Col xs="auto">{'score'}</Col>
          <Col xs="3">{'topScore'}</Col>
        </Row>
        </Container>
    )
  }
}
export default Nav;