import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../services/auth';

const UserLogged = () => {

    return (
        <>
            <LinkContainer to="/my-catalog">
                <Nav.Link active={false} eventKey="my-catalog" >My Playlist</Nav.Link>
            </LinkContainer>

            <Button onClick={logout} >Logout</Button>
        </>
    )
};

export default UserLogged;