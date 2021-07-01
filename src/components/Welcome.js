import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Music Catalog!</h1>
            <br />
            <br />
            <br />
            <h3>Here you can create playlists with your favourite songs or browse through other's playlists.</h3>
            <br />
            <br />
            <br />
            <p> In order to create your own music catalog, you have to be
                <LinkContainer style={{display:"inline-block"}} to="/login">
                    <Nav.Link eventKey="login">signed in</Nav.Link>
                </LinkContainer>
            </p>
            <p>If you're new and don't have an account yet, you could
                <LinkContainer style={{display:"inline-block"}} to="/register">
                    <Nav.Link eventKey="register">register here</Nav.Link>
                </LinkContainer>
            </p>

        </div>
    );
};

export default Welcome;