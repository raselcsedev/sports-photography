import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please Login</h2>

            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2 " type="submit">
                    Login
                </Button>
            </Form>
            
            <p>Create a new account. <Link to="/register" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
            {/* <SocialLogin></SocialLogin> */}
           

        </div>
    );
};

export default Login;