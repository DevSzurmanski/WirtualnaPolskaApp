import React, { Component } from 'react';
import {Navbar, MenuItem, NavItem, NavDropdown, Nav} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

var Nave = () =>{

 
        return (

        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">WP</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <IndexLinkContainer to="/">
          <NavItem>
            Wszystkie
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/tech">
          <NavItem>
            Tech
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/gwiazdy">
          <NavItem>
            Gwiazdy
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/wiadomosci">
          <NavItem>
            Wiadomości
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

        );
    
};
export default Nave;