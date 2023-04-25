import React from 'react';
import './static/styles/intro.css';
//import laptop from './static/images/laptop.png';
import programmer from './static/images/programmer.png';

function Intro() {
    
    return (
        <div className='intro' id='top'>
            <div className='name'>
                <h1>Brian<br />Pruitt</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <img src={programmer} 
                alt='Programmer'
                id='programmerImg' />
        </div>
    );
};

export default Intro;