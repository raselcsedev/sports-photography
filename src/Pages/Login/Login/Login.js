import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, {replace : true} );
    }



    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const passwordReset =async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2 " type="submit">
                    Login
                </Button>
            </Form>

            <p>Create a new account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forgot Password? <button className='btn btn-link text-primary ps-0 pt-0  text-decoration-none' onClick={passwordReset} >Reset Password</button> </p>
            <SocialLogin></SocialLogin>


        </div>
    );
};

export default Login;