import React from 'react';
import './static/styles/intro.css';
import laptop from './static/images/laptop.png';

function Intro() {
    
    return (
        <div className='intro'>
            <h1>Brian<br />Pruitt</h1>
            <img src={laptop} 
                alt='Laptop'
                id='laptop' />
        </div>
    );
};

export default Intro;