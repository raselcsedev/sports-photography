import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    if (googleError || gitHubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {gitHubError?.message} </p>

    }

    if (googleLoading || gitHubLoading) {
        return <Loading></Loading>
    }

    if (googleUser || gitHubUser) {
        navigate(from, {replace:true});
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-success w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2 text-white'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;