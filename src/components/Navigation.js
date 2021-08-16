import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UserLogged from './UserLogged';
import UserNotLogged from './UserNotLogged';
import AuthContext from '../services/context';

//Nav.Link active={false} - for problems with multiple active links

const Navigation = () => {
    const authContext = useContext(AuthContext);

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

                {authContext.isLoggedIn ? <UserLogged /> : <UserNotLogged />}

            </Nav>
        </Navbar>
    );
};

export default Navigation;