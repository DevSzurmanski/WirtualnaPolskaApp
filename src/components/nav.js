import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

// Nav and Navbar are already used
var Navv = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">WirtualnaPolskaApp</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <IndexLinkContainer to="/">
            <NavItem>Wszystkie</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/tech">
            <NavItem>Tech</NavItem>
          </LinkContainer>
          <LinkContainer to="/gwiazdy">
            <NavItem>Gwiazdy</NavItem>
          </LinkContainer>
          <LinkContainer to="/wiadomosci">
            <NavItem>Wiadomości</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navv;