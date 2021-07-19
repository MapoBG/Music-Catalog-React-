import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { login } from '../services/user';

const Login = (props) => {
    const [value, setValue] = useState({});

    const onBlur = ({ target }) => {
        //check value for errors and then setValue
        const object = { [target.name]: target.value };
        setValue(oldState => Object.assign(oldState, object));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        login(value)
            .then(() => props.history.push("/"));
    }
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