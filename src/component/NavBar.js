import React from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import logo from '../assets/png/logo.png';
import CartWidget from '../component/CartWidget';
import { Link } from 'react-router-dom';

const NavBarBS = () => {
    return (

    <Navbar bg="dark" variant="dark">
      <Container>
      <Link to='/'><img src={logo}/></Link>
        
        <Nav className="me-auto">
        
          <Link className='nav-link' to='/'> Home </Link>

          <NavDropdown title="Bebidas" id="navbarScrollingDropdown">

            <Link className='dropdown-item' to='/categorias/jugo'> Jugos de fruta </Link>
            <Link className='dropdown-item' to='/categorias/cafe'> Café</Link>

          </NavDropdown>
        
        </Nav>

        <Nav>
          <Link className=' nav-link justify-content-end' to='/cart'> <CartWidget /> </Link>
        </Nav>
      
      </Container>
  </Navbar>


    )
}

export default NavBarBS
