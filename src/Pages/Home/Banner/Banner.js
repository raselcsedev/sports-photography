import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img01 from '../../../images/banner/img01.jpg';
import img02 from '../../../images/banner/img02.jpg';
import img03 from '../../../images/banner/img03.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
            <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img01}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>Sports Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={img02}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Sports Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={img03}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Sports Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;