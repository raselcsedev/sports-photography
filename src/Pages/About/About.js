import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h1>GET IN TOUCH</h1>
            <div className='contact-us'>
                <div>
                    <h3>ADDRESS</h3>
                    <p>New Town Plaza</p>
                    <p><small>36/5, sotis chandra lane</small></p>
                </div>
                <div>
                    <h3>PHONE</h3>
                    <p>+880012345</p>
                    <p>+98943574879330</p>
                </div>
                <div>
                    <h3>EMAIL</h3>
                    <p><small>rr.dev@yahoo.com</small></p>
                    <p><small>mmm.web@gmail.com</small></p>
                </div>
            </div>
        </div>
    );
};

export default About;