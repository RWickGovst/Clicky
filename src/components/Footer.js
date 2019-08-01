import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Hola
          </NavItem>
          <NavItem
            eventKey={3}>
            Clicky Game
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © RJW 2019
        </div>
      
    </footer>
  );
}

export default Footer;