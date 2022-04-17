import React from 'react';
import { Link, useParams } from 'react-router-dom';
const PhotosDetail = () => {
    const {albumId} = useParams();
    return (
        <div>
            <h2>Welcome to Detail {albumId}</h2>
            <div className='text-center'>
            <Link to='/checkout' >
                <button className='btn btn-success '>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default PhotosDetail;