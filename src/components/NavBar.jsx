import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Food Nutrition Tracker</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Tracker</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link> 
            {/* here i will show totoal kcal protein taken in 7 days,30days as wish  */}
            <Nav.Link href="#pricing">LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar