import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-area">
            <h1 className="title-about">Doing the right thing, <br /> at the right time.</h1>
                <div className="container about-title">
                    <div className="single">
                        <h2>12</h2>
                        <button className="one">Teachers</button>
                    </div>
                    <div className="single">
                        <h2>100</h2>
                        <button className="one">Customars</button>
                    </div>
                    <div className="single">
                        <h2>10</h2>
                        <button className="three">Courses</button>
                    </div>
                    <div className="single">
                        <h2>2</h2>
                        <button className="four">Years</button>
                    </div>
                </div>
            </div>
            <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px 0'}}>
                <div>
                    <h1 style={{color: 'gray'}}><span style={{color: 'orange'}}>01.</span>Experience</h1>
                    <p style={{color: 'gray', padding: '0 20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores praesentium, quae dignissimos vero fuga? Provident similique, odit nihil expedita veritatis dolorem, optio asperiores ducimus sequi necessitatibus cupiditate! Voluptates, officiis?</p>
                </div>
                <div>
                    <h1 style={{color: 'gray'}}><span style={{color: 'orange'}}>02.</span>Professionality</h1>
                    <p style={{color: 'gray', padding: '0 20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores praesentium, quae dignissimos vero fuga? Provident similique, odit nihil expedita veritatis dolorem, optio asperiores ducimus sequi necessitatibus cupiditate! Voluptates, officiis?</p>
                </div>
                <div>
                    <h1 style={{color: 'gray'}}><span style={{color: '#6fc191'}}>03.</span>Guarantee</h1>
                    <p style={{color: 'gray', padding: '0 20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores praesentium, quae dignissimos vero fuga? Provident similique, odit nihil expedita veritatis dolorem, optio asperiores ducimus sequi necessitatibus cupiditate! Voluptates, officiis?</p>
                </div>
                <div>
                    <h1 style={{color: 'gray'}}><span style={{color: '#74cee4'}}>04.</span>Quality</h1>
                    <p style={{color: 'gray', padding: '0 20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores praesentium, quae dignissimos vero fuga? Provident similique, odit nihil expedita veritatis dolorem, optio asperiores ducimus sequi necessitatibus cupiditate! Voluptates, officiis?</p>
                </div>
            </div>
        </div>
    );
};

export default About;