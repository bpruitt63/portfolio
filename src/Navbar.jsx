import React from 'react';
import './static/styles/navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <a href='#top' id='brian'>Brian Pruitt</a>
            <a href='#projects'>Projects</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
        </div>
    );
};

export default Navbar;