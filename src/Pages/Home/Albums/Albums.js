import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';
import './Albums.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect( ()=>{
        fetch('shoot.json')
        .then(res => res.json())
        .then(data => setAlbums(data));
    }, [])
    return (
        <div id='albums' className='container'>
            <div className="row">
            <h3 className='text-success text-center mt-5'> UNIQUE CAPTURES</h3>
            <div className="albums-container">
            {
                albums.map(album => <Album
                    key={album.id}
                    album={album}
                >
                </Album>)
            }
            </div>
            </div>
        </div>
    );
};

export default Albums;