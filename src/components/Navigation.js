import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap/';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">M5-D3 📚</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Bestseller</Nav.Link>
                        <Nav.Link href="#link">Gialli da brivido!</Nav.Link>
                        <NavDropdown title="Altri" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Romanzi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Saggi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Manuali</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Altro
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;