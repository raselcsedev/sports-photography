import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img01 from '../../../images/banner/image1.jpg';
import img02 from '../../../images/banner/image2.jpg';
import img03 from '../../../images/banner/image3.jpg';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
            <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="banner d-block w-100"
                    src={img01}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h1 className='text-danger'>SPORTS PHOTOGRAPHY</h1>
                <h5 className='text-danger'>Sports and photography have always been entwined together. The desire to get the winning touchdown is similar to the desire to get the best shot of the winning touchdown.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="banner2 d-block w-100 h-100"
                    src={img02}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-danger'>SPORTS PHOTOGRAPHY</h1>
                    <h5 className='text-danger'>Sports and photography have always been entwined together. The desire to get the winning touchdown is similar to the desire to get the best shot of the winning touchdown.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="banner d-block w-100 h-100"
                    src={img03}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className='text-danger'>SPORTS PHOTOGRAPHY</h1>
                <h5 className='text-danger'>Sports and photography have always been entwined together. The desire to get the winning touchdown is similar to the desire to get the best shot of the winning touchdown.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;