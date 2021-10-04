import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeServices.css';

const HomeServices = (props) => {
    const {name, img, text} = props.service;
    
    return (
        <div className="single-area">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <button className="simple-btn">read more</button>
        </div>

        //************ my bootstrap framework not working ----------------
        // <Col>
        //     <Card>
        //         <Card.Img variant="top" src={img} />
        //         <Card.Body>
        //             <Card.Title>{name}</Card.Title>
        //             <Card.Text>{text}</Card.Text>
        //         </Card.Body>
        //     </Card>
        // </Col>
    );
};

export default HomeServices;