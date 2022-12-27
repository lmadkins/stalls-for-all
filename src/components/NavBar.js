import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  return (
  <Navbar 
    bg='light'
    className='nav'
    sticky='top'>
    
    <Container>
      <Navbar.Brand href='/'>
        <h1 className='display-6'>
          Stalls for All</h1>
      </Navbar.Brand>
      <Navbar.Collapse
        className='justify-content-end'>

        <Nav.Link href='/about' 
          aria-label='About'>            
          <p className='h5'>
            About
          </p>
        </Nav.Link>
        <Nav.Link 
          aria-label='Submit New Location'
          href='https://www.refugerestrooms.org/restrooms/new'> 
            
            <p className='h5'>
              Submit
            </p>
        </Nav.Link>

      </Navbar.Collapse>
    </Container>

  </Navbar>
  );
}

export default NavBar;