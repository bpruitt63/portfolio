import React from 'react';
import './static/styles/about.css';
import { aboutMe, mySkills } from './static/data/about_me';

function About() {

    return (
        <>
            <div id='about' className='pageAnchor'></div>
            <h2 className='sectionTitle'>About me</h2>
            <div className='about'>
                <div className='aboutMe'>{aboutMe}</div>
                <div className='aboutImage'></div>
            </div>
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
        </>
    );
};

export default About;