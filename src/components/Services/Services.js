import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('./service.JSON')
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])
    return (
        <div className="container" style={{marginTop: '20px'}}>
            <h1 style={{paddingLeft: '20px', paddingTop: '30px', fontSize: '50px', color: '#ec774b'}}>Services</h1>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                {
                    cart.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
        
    );
};

export default Services;