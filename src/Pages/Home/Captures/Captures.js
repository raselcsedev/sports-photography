import React, { useEffect, useState } from 'react';
import Capture from '../Capture/Capture';
import './Captures.css'

const Captures = () => {
    const [captures, setCaptures] = useState([]);
    useEffect( ()=>{
        fetch('pictures.json')
        .then(res => res.json())
        .then(data => setCaptures(data));
    }, [])
    return (
        <div id='captures' className='container'>
            <div className="row">
            <h2 className='text-primary text-center mt-5'> Unique Captures</h2>
            <div className="captures-container">
            {
                captures.map(capture => <Capture
                    key={capture.id}
                    capture={capture}
                >
                </Capture>)
            }
            </div>
            </div>
        </div>
    );
};

export default Captures;