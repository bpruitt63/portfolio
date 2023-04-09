import React from 'react';
import { aboutMe } from './static/data/personal_data';

function About() {

    return (
        <>
            <h2>About me</h2>
            <p>{aboutMe.description}</p>
        </>
    );
};

export default About;