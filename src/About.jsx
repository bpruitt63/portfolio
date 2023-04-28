import React from 'react';
import './static/styles/about.css';
import tall_guy from './static/images/tall_guy.png';
import { aboutMe, mySkills } from './static/data/about_me';

function About() {

    return (
        <>
            <div id='about' className='pageAnchor'></div>
            <h2 className='sectionTitle'>About me</h2>
            <div className='about'>
                <div className='aboutImageDiv'>
                    <img id='aboutImage'
                        src={tall_guy}
                        alt='Man holding a laptop'/>
                </div>
                <div className='aboutMe'>
                    <h3>Hi, I'm Brian</h3>
                    {aboutMe}
                    <div className='mySkills'>
                        <h3>My Skills</h3>
                        <ul>
                            {Object.keys(mySkills).map(s =>
                                <li key={s}>
                                    <span className='skill'>{`${s}: `}</span> 
                                    {mySkills[s]}
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;