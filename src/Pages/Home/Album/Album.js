import React from 'react';
import { useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {id, name, img, description} = album;

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/album/${id}`)
    }
    return (
        <div className='album'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <div className='w-100 text-center'>
            <button onClick={()=> navigateToServiceDetail(id)} className='btn btn-success px-5'>Details</button>
            </div>
        </div>
    );
};

export default Album;