import React from 'react';

const Service = (props) => {
    const {name, img, text} = props.service;
    return (
        <div style={{backgroundColor: '#F3F4F6', padding: '20px 20px', margin: '10px'}}>
            <img style={{width: '64px'}} src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <button style={{padding: '10px 20px', marginTop: '15px', textAlign: 'center', borderRadius: '7px', color: '#fff', backgroundColor: '#ec774b', fontWeight: 'bold', fontSize: '18px', cursor:'pointer', border: 'none'}}>Read More</button>
        </div>
    );
};

export default Service;