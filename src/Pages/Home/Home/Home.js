import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Albums></Albums>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </section>
    );
};

export default Home;