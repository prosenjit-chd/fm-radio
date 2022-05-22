import React, { useEffect, useState } from 'react';
// import login from '../../../images/login.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Spinner, Row, Col } from 'react-bootstrap';
import { BsGoogle } from "react-icons/bs";
import ReactLoading from 'react-loading';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError, setAuthError } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setAuthError('');
    }, []);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            setAuthError('Your password did not match');
            return
        } else {
            registerUser(loginData.email, loginData.password, loginData.name, navigate);
        }
    }

    return (
        <Container fluid className="login-img">
            <div className="pt-5" style={{ paddingTop: 20 }}>
                <div className="py-3 px-5 mx-auto shadow-lg login-background" style={{ maxWidth: 500 }}>
                    <h3 className="text-center mb-4 primary-color fw-bold">Registration</h3>
                    {!isLoading && <Form onSubmit={handleRegisterSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="name" onChange={handleOnBlur} type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onChange={handleOnBlur} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onChange={handleOnBlur} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control name="password2" onChange={handleOnBlur} type="password" placeholder="Re-Type Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-flex flex-column justify-content-center">
                            <Button variant="light" className="rounded-pill mt-4 primary-background fs-5" type="submit">
                                Sign Up
                            </Button>
                            <Link to="/login" className="text-center mt-2">Already have an account</Link>
                        </div>
                    </Form>}
                    {isLoading && <div className="d-flex align-items-center justify-content-center">
                        <ReactLoading type={"spokes"} color={"#A99577"} height={100} width={100} />
                    </div>}
                    {user?.email && <p className="text-center text-success">User Created successfully!</p>}
                    {authError && <p className="text-center text-danger">{authError}</p>}
                </div>
            </div>
        </Container>

    );
};

export default Register;