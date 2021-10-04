import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container  main-cantact">
                <div className="contact-area">
                    <h2>Contact Us</h2>
                    <h4>Call Us</h4>
                    <small>01310365997</small>
                    <br />
                    <h4>Business hours</h4>
                    <small>Mon-Fri 8 AM - 5 PM</small>
                    <br />
                    <h4>Location</h4>
                    <small>Bangladesh, Kustia-Meherpur</small>
                </div>
                <div className="form-area">
                    <h2>Talk to a Human</h2>
                    <form action="">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" name="" id="" placeholder="Your Email" required />
                        <textarea placeholder="MESSAGE" name="" id="" cols="30" rows="10"></textarea>
                        <input className="simple-btn" type="submit" value="Send a message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;