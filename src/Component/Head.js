import React from 'react'
import {Nav,Navbar,Container}from 'react-bootstrap'
const Head = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ToDo Application  </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Tasks</Nav.Link>
          <Nav.Link href="#features">Add Task</Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Head
