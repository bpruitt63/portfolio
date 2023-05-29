import React from 'react';
import './static/styles/contact.css';
import { links } from './static/data/links';
import ContactForm from './ContactForm';
import ContactLink from './ContactLink';

function Contact() {

    const UA = navigator.userAgent;
    const isWebkit =
        /\b(iPad|iPhone|iPod)\b/.test(UA) &&
        /WebKit/.test(UA) &&
        !/Edge/.test(UA) &&
        !window.MSStream;

    return (
        <>
            <div id='contact' className='pageAnchor'></div>
            <h2 className='sectionTitle'>Contact</h2>
            <div className='contact'>
                <div className='contactLinks'>
                    {Object.keys(links).map(l =>
                        <ContactLink key={l}
                                    type={l}
                                    link={links[l].link}
                                    image={links[l].img}
                                    label={links[l].label} />)}
                </div>
                <div className='contactForm'>
                    <h3 id='contactMe'>Contact Me</h3>
                    {!isWebkit &&
                        <ContactForm />}
                </div>
            </div>
        </>
    );
};

export default Contact;