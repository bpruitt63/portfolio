import React from 'react';
import './static/styles/intro.css';
import laptop from './static/images/laptop.png';

function Intro() {
    
    return (
        <div className='intro'>
            <div className='name'>
                <h1>Brian<br />Pruitt</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <img src={laptop} 
                alt='Laptop'
                id='laptop' />
        </div>
    );
};

export default Intro;