import { Button, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Nav.Link active={false} - for problems with multiple active links

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>Music Catalog</Navbar.Brand>
            {/* <Navbar.Toggle  aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav variant="pills" fill="true">

                <LinkContainer exact to="/">
                    <Nav.Link active={false} eventKey="home" >Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/catalog">
                    <Nav.Link active={false} eventKey="catalog" >Catalog</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/my-catalog">
                    <Nav.Link active={false} eventKey="my-catalog" >My Playlist</Nav.Link>
                </LinkContainer>

                <Button >Logout</Button>

                <LinkContainer to="/login">
                    <Nav.Link active={false} eventKey="login" >Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                    <Nav.Link active={false} eventKey="register">Register</Nav.Link>
                </LinkContainer>

            </Nav>
        </Navbar>
    );
};

export default Navigation;