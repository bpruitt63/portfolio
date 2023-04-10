import React from 'react';
import { aboutMe } from './static/data/personal_data';

function About() {

    return (
        <>
            <div id='about' className='pageAnchor'></div>
            <h2 className='sectionTitle'>About me</h2>
            <p>{aboutMe.description}</p>
        </>
    );
};

export default About;