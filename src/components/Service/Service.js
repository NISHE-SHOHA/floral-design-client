import React from 'react';
import './Service.css';
import { Link, useLocation } from 'react-router-dom';


const Service = ({service}) => {
    const { _id, name, description, img, price } = service;
    const location = useLocation();
    return (
        <div className="col-md-6 col-lg-4 pb-3 mt-3 fw-bold">
           <div className="card service rounded-3 h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title fw-bold">{name}</h5>
            <h4>Price: {price}</h4>
            <p classN ="card-text ms-2">{description}</p>
            {!location.pathname.includes('/orders') && <Link to={`/booking/${_id}`}>
            <button className="btn btn-light text-dark fw-bold border border-primary">BUY NOW</button>
            </Link>}
            </div>
         </div>
        </div>
    );
};

export default Service;