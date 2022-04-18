import React from 'react';
import './PictureDetail.css'

const PictureDetail = ({picture}) => {
    const {name,img, price, description} = picture;
    return (
        <div className='d-flex align-items-center w-75'>
            <div>
            <img className='image-container' src={img} alt="" />
            </div>
            <div>
            <h2 className='w-100 '>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price : <small>{price}</small></p>
            </div>   
        </div>
    );
};

export default PictureDetail;