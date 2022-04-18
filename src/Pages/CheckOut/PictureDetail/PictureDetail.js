import React from 'react';
import './PictureDetail.css'

const PictureDetail = ({picture}) => {
    const {name,img, price, description} = picture;
    return (
        <div className='d-lg-flex align-items-center w-75'>
            <div>
            <img className='image-container' src={img} alt="" />
            </div>
            <div>
            <h2 className='w-100 '>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price : <small>{price}</small></p>
            <button className='btn btn-success'>buy now</button>
            </div>   
        </div>
    );
};

export default PictureDetail;