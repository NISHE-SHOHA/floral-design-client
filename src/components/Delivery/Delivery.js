import React from 'react';
import picture from '../../images/pic1.jpg';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="fw-bold container">
            <h2>The Floral Design Story</h2>
            <h4>Flowers, Festivals & Celebrations... It Is What We Do!</h4>
            <h5>Come Visit the Shop</h5>
            <p>We are open and delivering.
            Our store hours are:
            Monday through Friday from 9AM to 4PM
            Saturday from 9AM to 2PM
            Sunday Closed.</p>
            <p>When the history books write the Starbright story, we will be judged kindly if we always remembered to do our best, give everyone we meet a smile and lead our industry with innovation, creativity, quality and service. Our Mission Statement, 14 September 1994.
            </p>
            <div >
                <img className="w-50 h-50 mb-5" src={picture} alt="" />
            </div>
            <hr/>
            <h4>Payment Options</h4>
            <p>We accept the following payment methods:</p>
            <ul className="delivery-menu">
                <li>Visa</li>
                <li>MasterCard</li>
                <li>Discover/NOVUS</li>
                <li>Diners Club</li>
                <li>Carte Blanche</li>
            </ul>
        </div>
    );
};

export default Delivery;