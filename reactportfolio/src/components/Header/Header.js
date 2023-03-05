import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import favicon from "./assets/images/favicon-32x32.png";

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/PortfolioHome">
          <Navbar.Brand><a> <img src={favicon}></img>Alana Barrett-Frew</a></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/PortfolioHome"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/PortfolioGallery"><Nav.Link >Portfolio Gallery</Nav.Link></LinkContainer>
            <LinkContainer to="/PortfolioContact"><Nav.Link >Contact Me</Nav.Link></LinkContainer>
            <LinkContainer to="/CV"><Nav.Link >CV</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
