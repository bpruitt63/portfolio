import React from 'react';
import { aboutMe } from './static/data/about_me';

function About() {

    return (
        <>
            <div id='about' className='pageAnchor'></div>
            <h2 className='sectionTitle'>About me</h2>
            <p>{aboutMe}</p>
        </>
    );
};

export default About;