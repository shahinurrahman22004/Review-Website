import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header container">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>

                    <li><a href="/about">About us</a></li>

                    <li><a href="/services">Services</a></li>

                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;