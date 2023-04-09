import React from 'react';
import './static/styles/contact.css';
import { aboutMe } from './static/data/personal_data';

function Contact() {

    return (
        <div className='contact'>
            <h2>Contact</h2>
            <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a>
            <a href={aboutMe.linkedIn}>LinkedIn</a>
            <p>resume</p>
            <a href={aboutMe.github}>GitHub</a>
        </div>
    );
};

export default Contact;