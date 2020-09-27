import React from 'react';
import './style.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="white" variant="light">
        <Container>
          <Nav className="mr-auto">
            <NavLink smooth to="/#bundles">Bundles</NavLink>
            <NavLink smooth to="/#starters">Starters</NavLink>
            <NavLink smooth to="/#main-dishes">Main Dishes</NavLink>
            <NavLink smooth to="/#sides">Sides</NavLink>
            <NavLink smooth to="/#desserts">Desserts</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
