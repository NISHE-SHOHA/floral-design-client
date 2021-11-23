import React from 'react';
import img from '../../images/img1 (2).jpg';

const About = () => {
    return (
        <div className="container fw-bold">
            <h2>About Us</h2>
            <img className="w-50 h-30" src={img} alt="" />
            <h4>About Flowers By Sutton</h4>
            <p>Flowers By Sutton proudly serves the New Rochelle area. We are family owned and operated. We are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one. That is why we always go the extra mile to make your floral gift perfect.</p>
            <hr/>
            <h4>Contact Information</h4>
            <p>If you have any questions or need more information, please call us directly at (866) 788-8667. We're always here to serve you and make your flower-sending experience a pleasure. </p>

        </div>
    );
};

export default About;