import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import WebsiteStructure from '../domain/website_structure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MiniBanner from '../assets/mini-banner.png'

import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleNameChange = (event) => setName(event.target.value);
    const handlePhoneChange = (event) => setPhone(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Your EmailJS service ID, template ID, and public API key.
        emailjs.send('service_12pacyd', 'template_vbf89to', {
            name: name,
            phone: phone,
            email: email,
            message: message,
        }, 'E8sP23Ug6SAH5Mv1n')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert("Failed to send message.");
            });
    };
    

    return (
        <div className="contact-us-main">
            <Navbar websitestructure={WebsiteStructure.CONTACTUS} />
            <div className="absolute top-20 flex flex-row justify-center  left-0 w-full h-[100px] bg-black">
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
        </div>
            <div className="contact-us-data">
                <div className="cu-data">
                    <DataHolder icon={faLocationDot} heading='Address' subdata='93C DD DHA phase 4 Lahore Punjab Pakistan' />
                    <DataHolder icon={faPhone} heading='Phone' subdata='+92 03494883368' />
                    <DataHolder icon={faEnvelope} heading='Mail' subdata='Avantcore.com' />
                </div>
                <div className="form">
                <h2>Contact</h2>

                    <div className="name-phone">
                        <InputField placeholder="name" value={name} handleChange={handleNameChange} />
                        <InputField placeholder="phone" value={phone} handleChange={handlePhoneChange} />
                    </div>
                    <InputField placeholder="email" value={email} handleChange={handleEmailChange} />
                    <InputField placeholder="message" value={message} handleChange={handleMessageChange} />
                    <button className="send-button" onClick={sendEmail}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

// InputField component
function InputField({ placeholder, value, handleChange }) {
    return (
        <>
            {placeholder === "message" ? (
                <textarea
                    className="message-input-field"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    className="input-field"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            )}
        </>
    );
}

// DataHolder component
function DataHolder({ icon, heading, subdata }) {
    return (
        <div className="data-holder">
            <div className="icon-Contact-holder">
                <FontAwesomeIcon className='icon' icon={icon} />
            </div>
            <div className="data">
                <p className='dataHolder-p'>{heading}</p>
                <p>{subdata}</p>
            </div>
        </div>
    );
}
