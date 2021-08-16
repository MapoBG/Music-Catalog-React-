import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../services/auth';
import AuthContext from '../services/context';


const UserLogged = () => {
    const authContext = useContext(AuthContext);

    const useUserLoggedOut = () => {
        logout();
        authContext.logout();
    };

    return (
        <>
            <LinkContainer to="/my-catalog">
                <Nav.Link active={false} eventKey="my-catalog" >My Playlist</Nav.Link>
            </LinkContainer>

            <Button onClick={useUserLoggedOut} >Logout</Button>
        </>
    );
};

export default UserLogged;