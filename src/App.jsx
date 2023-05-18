import React, { useState, useEffect } from 'react';
import './static/styles/App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {

	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const closeDropdown = () => {
		if (dropdownOpen) setDropdownOpen(false);
	};
    const openDropdown = () => {
		if (!dropdownOpen) setDropdownOpen(true);
	};

	return (
		<div className="App" onClick={closeDropdown}>
			<Navbar dropdownOpen={dropdownOpen} 
					openDropdown={openDropdown}/>
			<Intro />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App
