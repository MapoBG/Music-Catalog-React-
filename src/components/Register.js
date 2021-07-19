import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { register } from '../services/user';

const Register = () => {
    const [value, setValue] = useState({});

    const onBlur = ({ target }) => {
        //check value for errors and then setValue
        const object = { [target.name]: target.value };
        setValue(oldState => Object.assign(oldState, object));
        console.log(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        register(value);
        setValue(oldState => oldState = {});
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={onBlur} size="lg" type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={onBlur} size="lg" type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicRePass">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control onBlur={onBlur} size="lg" type="password" name="rePass" placeholder="Repeat Password" />
            </Form.Group>
            <Button size="lg" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Register;