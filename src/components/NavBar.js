import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './About';

function NavBar(props) {
  return (
  <>
    <Navbar 
    bg="light"
    sticky="top"
    className='nav'>
        <Container>
          <Navbar.Brand href="/">Stalls for All</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link 
            href="/about"
            aria-label="About">
            {/* <Link to="/">About</Link> */}
            About
          </Nav.Link>
          <Nav.Link 
          href="https://www.refugerestrooms.org/restrooms/new"
          aria-label="Submit New Location">
            Submit 
          </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Routes>
            <Route path= "./About" element={<About />}/>
          </Routes> */}
    </>
  );
}

export default NavBar;