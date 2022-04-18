import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Albums></Albums>
            <Footer></Footer>

        </section>
    );
};

export default Home;