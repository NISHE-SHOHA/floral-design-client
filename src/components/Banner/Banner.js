import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';


const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner1}
                    alt="First slide"/>
                    
                <Carousel.Caption>
                    <h3>Flowers, Festivals & Celebrations</h3>
                    <p>For this month 20% off.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner2}
                    alt="Second slide"/>

                <Carousel.Caption>
                    <h3>Flowers, Festivals & Celebrations</h3>
                    <p>For this month 20% off.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner3}
                    alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Flowers, Festivals & Celebrations</h3>
                    <p>For this month 20% off.</p>
             </Carousel.Caption>
            </Carousel.Item>
    </Carousel>   
       </>
    );
};

export default Banner;