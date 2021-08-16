import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';

import { login } from '../services/auth';
import AuthContext from '../services/context';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const [value, setValue] = useState({});

    const onBlur = ({ target }) => {
        //check value for errors
        const inputToCheck = { [target.name]: target.value };
    };

    const useUserLoggedIn = () => {
        authContext.login();
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        //check value for errors
        const form = e.target;
        const loginInfo = {
            'email': form.email.value,
            'password': form.password.value,
        };

        setValue(oldState => Object.assign(oldState, loginInfo));

        login(value)
            .then(useUserLoggedIn)
            .then(() => props.history.push("/"));
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={onBlur} size="lg" type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={onBlur} size="lg" type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Button size="lg" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;