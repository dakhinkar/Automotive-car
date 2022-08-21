import { Container, Nav, Navbar, Button } from 'react-bootstrap';


const NavBarPage = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Automotive</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                    </Nav>

                    <Nav >
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Price</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Button variant="primary">Book Appointment</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBarPage;

