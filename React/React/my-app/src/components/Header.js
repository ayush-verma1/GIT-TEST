import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import{Link} from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Campus Buddy</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="/">Home</Nav.Link>
            <Link to="/about">
                <Nav.Link href="/about">
                    About
                </Nav.Link>   
            </Link>
            <Link to="/contact">
                <Nav.Link href="/contact">
                    Contact
                </Nav.Link>   
            </Link>
        
            <Link to="/notice">
                <Nav.Link href="/notice">
                    Notices
                </Nav.Link>   
            </Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
