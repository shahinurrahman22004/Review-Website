import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container footer-extra">
                    <div>
                        <h4>Educate</h4>
                        <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
                        <p>01310365997</p>
                        <p>Sat-Thu 8:00-16:00</p>
                    </div>
                    <div>
                        <h4>Latest News</h4>
                        <p>Graduate Admissions</p>
                        <small>by shahinur rahman</small>
                        <br />
                        <p>Continuing Education</p>
                        <small>by shahinur rahman</small>
                        <br />
                        <p>Current Students</p>
                        <small>by shahinur rahman</small>
                    </div>
                    <div>
                        <h4>Useful Links</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <p style={{color: 'gray'}}>Copyright © Secondary Kindergarten Theme by Stylemix Themes</p>
            </div>
        </div>
        
    );
};

export default Footer;