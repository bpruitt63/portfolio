import React from 'react';
import './static/styles/intro.css';
import computer_guy from './static/images/computer_guy.png';
//import programmer from './static/images/programmer.png';

function Intro() {
    
    return (
        <div className='intro' id='top'>
            <div className='name'>
                <h1>Brian<br />Pruitt</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <img src={computer_guy} 
                alt='Man at computer'
                id='introImg' />
        </div>
    );
};

export default Intro;