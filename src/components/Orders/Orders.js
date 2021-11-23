import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch('https://evil-blood-77683.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2>This is orders page</h2>
            <Row>
                {orders.map(order =><Service
                service={order}
                ></Service>)}
            </Row>
        </div>
    );
};

export default Orders;