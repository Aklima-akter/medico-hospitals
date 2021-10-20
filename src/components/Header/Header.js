import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';



const Header = () => {
  const {user, logOut} = useAuth();
    return (
       <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
    <Container>
    <Navbar.Brand className='text-dark fw-bolder' to="#home">Medico</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink } to="/home#home" className='text-dark fw-bolder'>Home</Nav.Link>
      <Nav.Link as={HashLink } to="/home#services" className='text-dark fw-bolder'>Services</Nav.Link>
      <Nav.Link as={HashLink } to="/home#experts" className='text-dark fw-bolder'>Experts</Nav.Link>
      <Nav.Link as={HashLink } to="/home#banner" className='text-dark fw-bolder'>Banner</Nav.Link>
      <Nav.Link as={NavLink} to="/about" className='text-dark fw-bolder'>About us</Nav.Link>
      <Nav.Link as={NavLink} to="/contact" className='text-dark fw-bolder'>Contact us</Nav.Link>
      {user.email && <span className='text-dark pe-3'>Hello {user.displayName}</span>}
      { 
        user.email?
        <Nav.Link as={NavLink} to="/home" className='text-dark  fw-bolder'> <button className="btn btn-danger" onClick={logOut}>logout</button></Nav.Link>
        :
        <Nav.Link as={NavLink} to="/login" className='text-dark  btn btn-success text-white fw-bolder'>Login</Nav.Link>}
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
       </>
        
    );
};

export default Header;