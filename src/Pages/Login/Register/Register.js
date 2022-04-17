import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading){
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(name, email, password);


    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Enter password" required />
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