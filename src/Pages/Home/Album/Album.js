import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({album}) => {
    const {name, img, description} = album;


    return (
        <div className='album'>
            <img className='w-100' src={img} alt="" />
            <h2 className='w-100 text-center'>{name}</h2>
            <p><small>{description}</small></p>
            <div className='w-100 text-center'>
            <Link to='/checkout' >
                <button className='btn btn-success '>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default Album;