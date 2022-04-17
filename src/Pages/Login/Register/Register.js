import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate(from, {replace : true} );
    }
    const handleRegister = event =>{
        event.preventDefault();
        // const name = e.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        

    }
   
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2 " type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} >Please Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};
export default Register;