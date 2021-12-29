import React from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import logo from '../assets/png/logo.png';
import CartWidget from '../component/CartWidget';

const NavBarBS = () => {
    return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <img src={logo}/>
        
        <Nav className="me-auto">
        
          <Nav.Link href="#home">Home</Nav.Link>

          <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Categoría 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Categoría 2</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Categoría 3
              </NavDropdown.Item>
          </NavDropdown>

            <Nav.Link href="#promociones">Promociones</Nav.Link>
        
        </Nav>

        <Nav>
          <Nav.Link className="justify-content-end" href='#'> <CartWidget /> </Nav.Link>
        </Nav>
      
      </Container>
  </Navbar>


    )
}

export default NavBarBS
