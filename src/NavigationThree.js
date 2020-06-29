import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import TwitterLogo from "./images/Twitter_Logo_White.svg";

class NavigationThree extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <img id="twitter-logo" src={TwitterLogo} alt="Twitter Logo"></img>
        <Navbar.Brand href="/">NavigationThree</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/showcase">Showcase</Nav.Link>
            <Nav.Link href="/random">Random</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationThree;
