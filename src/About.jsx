import React from 'react';
import './static/styles/about.css';
import { aboutMe } from './static/data/about_me';

function About() {

    return (
        <>
            <div id='about' className='pageAnchor'></div>
            <h2 className='sectionTitle'>About me</h2>
            <div className='aboutMe'>{aboutMe}</div>
        </>
    );
};

export default About;