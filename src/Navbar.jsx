import React, { useState } from 'react';
import './static/styles/navbar.css';
import hamburger from './static/images/hamburger.png';

function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className='navbar'>
            <a href='#top' id='brian'>Brian Pruitt</a>

            {/** Dropdown for small screens */}
            <div className='dropdown'>
                <button onClick={toggle}>
                    <img src={hamburger}
                        className='icon'
                        alt='Expand Navigation Menu' />
                </button>
                {dropdownOpen && 
                    <div className='dropdownLinks'>
                        <a href='#projects'>Projects</a>
                        <a href='#about'>About</a>
                        <a href='#contact'>Contact</a>
                    </div>}
            </div>

            {/** Fully displayed navbar for med to large screens */}
            <div className='pageLinks'>
                <a href='#projects'>Projects</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    );
};

export default Navbar;