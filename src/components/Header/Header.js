import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { GiFlowerEmblem, GiFlowers } from 'react-icons/gi';



const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
          <Navbar bg="" variant="dark" sticky="top" collapseOnSelect expand="lg" style={{backgroundColor: 'pink'}}>
          <Container className="fst-italic fw-bolder">
              <div className="text-white fw-bold">
              <GiFlowerEmblem />
              <GiFlowers />
              </div>
            <Navbar.Brand as={ Link }
             to="/">Nishe's Floral Design</Navbar.Brand>
             <Navbar.Collapse      className="justify-content-end">
              <Nav.Link as={ Link }
               to="/"        className="text-decoration-none">Home</Nav.Link>
              <Nav.Link as={ Link }
              to="/manageServices">Manage Services</Nav.Link>
              <Nav.Link as={ Link }
              to="/addservice">Add Service</Nav.Link>
              <Nav.Link as={ Link }
              to="/orders">My Orders</Nav.Link>
              <Nav.Link as={ Link }
              to="/delivery">Delivery</Nav.Link>
              <Nav.Link as={ Link }
              to="/about">About Us</Nav.Link>
              {user?.email ?
              <Button onClick={logOut} variant="light">Log out</Button> : 
              <Nav.Link as={ Link }
              to="/login">Login</Nav.Link>} 
              <Navbar.Toggle />
              <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
};

export default Header;