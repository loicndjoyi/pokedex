import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => (
    <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Pokemons</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
