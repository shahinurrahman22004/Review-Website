import React from 'react';
import './Home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
// import { Card, Col, Row } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./home-service.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    } , [])
    return (
        <div>
            <div className="home">
                <div className="text-area container">
                    <h1>Knowledge is <br /> Our Skill</h1>
                    <p>Educator is a permium education theme packed with everything you will ever need for creating the website for your school.</p>
                    <button className="read-more-btn">READ MORE</button>
                </div>
            </div>
            <div className="container service">
                {
                    services.map(service => <HomeServices key={service.key} service={service}></HomeServices>)
                }
                     
                {/************* My Bootstrap framework not working --------------------- */}

                {/* <Row className="colmun" xs={1} md={4}>
                    {
                        services.map(service => <HomeServices key={service.key} service={service}></HomeServices>)
                    }
                </Row> */}
            </div>
        </div>
    );
};

export default Home;