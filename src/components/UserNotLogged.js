import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const UserNotLogged = () => {

    return (
        <>
            <LinkContainer to="/login">
                <Nav.Link active={false} eventKey="login" >Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
                <Nav.Link active={false} eventKey="register">Register</Nav.Link>
            </LinkContainer>
        </>
    )
};

export default UserNotLogged;