import React from 'react';
import { useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {id, name, img, description, price} = album;

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='album'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Album;