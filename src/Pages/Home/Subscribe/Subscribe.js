import React from 'react';
import { Form } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='container bg-primary border mt-5'>
            <h2 className='text-center text-white mt-4'>Want more insights like this?</h2>
            <p className='text-white text-center container'>Subscribe to our bi-weekly newsletter to get the latest thought leadership content delivered right to your inbox — from blogs and resource articles, to podcast episodes, webinars and more.</p>
            <Form.Group className="input-field w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter your Email Address" />
                </Form.Group>
            <div className='subscribe-button text-center '>
            <button className='btn btn-dark'>SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;