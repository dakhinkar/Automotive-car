import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const NavBarPage = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'><FaCar /> Automotive</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                    </Nav>
                    <Nav >
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/features'>Features</Nav.Link>
                        <Nav.Link as={NavLink} to='/price'>Price</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Button variant="primary">Book Appointment</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBarPage;

