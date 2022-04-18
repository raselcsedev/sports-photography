import React from 'react';
import './About.css'
import rasel from '../../images/about/rasel.png'

const About = () => {
    return (
        <div className='about'>
            <div className='align-items-center justify-content-center w-100'>
            <div>
            <img className='image-container' src={rasel} alt="" />
            </div>
            <div>
            <h2 className='w-100 '>Md. Rasel Aktar</h2>
            <p><small> I am Rasel. I spend my whole day, practically every day, experimenting with HTML, CSS, JavaScript and React .</small></p>
            <button className='btn btn-success'>resume</button>
            </div>   
        </div>
        </div>
    );
};

export default About;