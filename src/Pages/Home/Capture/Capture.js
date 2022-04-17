import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Capture.css'

const Capture = ({capture}) => {
    const {id, name, img, description} = capture;

    const navigate = useNavigate();
    return (
        <div className='capture'>
            <img className='w-100' src={img} alt="" />
            {/* <h2>{name}</h2>
            <p><small>{description}</small></p> */}
            {/* <div className='w-100 text-center'>
            <button  className='btn btn-success px-5'>Details</button>
            </div> */}
        </div>
    );
};

export default Capture;