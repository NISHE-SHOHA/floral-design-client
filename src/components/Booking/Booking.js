import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';


const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const history = useHistory();

    useEffect( ()=>{
       fetch(`https://evil-blood-77683.herokuapp.com/services/${serviceId}`) 
       .then(res => res.json())
       .then(data => setService(data))
    }, [])

    const handleDelete = id =>{
        alert('Do you want to delete this service')
        const url = `https://evil-blood-77683.herokuapp.com/services/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
           
        
            if(data.deletedCount){
               history.push('/')
               alert('Your Service Has Been Deleted')
            }
        })
    }

    const handleOrder = (data) =>{
        const order ={
            name: data.name,
            description: data.description,
            img: data.img,
            price: data.price
        }
        axios.post('https://evil-blood-77683.herokuapp.com/orders', order)
        .then(res => {
            if(res.data.insertedId){
                alert('Your Order Placed Successfully'); 
                history.push('/orders') 
            }
        })
    }

    return (
         <div className="container bg-light text-dark fw-bold mt-5 mb-5 pt-5 pb-5">
            <h2>===Your Order===</h2>
            <img src={service.img} alt="" />
            <h3>Name: {service.name}</h3>
            <h4>Price: {service.price}</h4>
            <p>Description: {service.description}</p>
            <div className="d-flex justify-content-center align-items-center">
            <button onClick={()=> handleDelete(service._id)} className="btn btn-danger fw-bold me-5">Delete</button>
            <button onClick={ () => handleOrder(service)} className="btn btn-primary fw-bold">Order Place</button>
            </div>
         </div>   
    );
};

export default Booking;