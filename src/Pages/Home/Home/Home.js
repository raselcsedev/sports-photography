import React from 'react';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Captures from '../Captures/Captures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Captures></Captures>
            <Albums></Albums>

        </div>
    );
};

export default Home;