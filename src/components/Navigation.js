import { Button, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>Music Catalog</Navbar.Brand>
            {/* <Navbar.Toggle  aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav variant="pills" fill="true">

                <LinkContainer exact to="/">
                    <Nav.Link eventKey="home" >Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/catalog">
                    <Nav.Link eventKey="catalog" >Catalog</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/my-catalog">
                    <Nav.Link eventKey="my-catalog" >My Playlist</Nav.Link>
                </LinkContainer>

                <Button >Logout</Button>

                <LinkContainer to="/login">
                    <Nav.Link eventKey="login" >Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                    <Nav.Link eventKey="register">Register</Nav.Link>
                </LinkContainer>

            </Nav>
        </Navbar>
    );
};

export default Navigation;