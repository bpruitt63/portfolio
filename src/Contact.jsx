import React from 'react';
import './static/styles/contact.css';
import { aboutMe } from './static/data/personal_data';

function Contact() {

    return (
        <>
            <div id='contact' className='pageAnchor'></div>
            <h2 className='sectionTitle'>Contact</h2>
            <div className='contact'>
                <a href={`mailto:${aboutMe.email}`}
                    target='blank'>
                        {aboutMe.email}
                </a>
                <a href={aboutMe.linkedIn}
                    target='blank'>
                    LinkedIn
                </a>
                <a href='/src/brian_pruitt_resume.pdf'
                    target='blank'>
                    Resume
                </a>
                <a href={aboutMe.github}
                    target='blank'>
                    GitHub
                </a>
            </div>
        </>
    );
};

export default Contact;