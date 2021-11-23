import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect( ()=>{
       fetch('https://evil-blood-77683.herokuapp.com/services')
       .then(res=>res.json())
       .then(data => setServices(data))
    }, [])

    const handleDelete = id =>{
        const url = `https://evil-blood-77683.herokuapp.com/services/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        });
    }

    return (
        <div className="mt-3 mb-3 fw-bold">
            <h2>===Manage services===</h2>
            {
                services.map(service => <div
                    key={service._id}>
                    <img src={service.img} alt="" />
                    <h3> Name: {service.name}</h3>
                    <h4>Price: {service.price}</h4>
                    <p>Details: {service.description}</p>
                    <button className="mb-5 btn btn-danger fw-bold" onClick={()=> handleDelete(service._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;