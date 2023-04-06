import './static/styles/App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<Projects />
			<About />
			<Contact />
		</div>
	);
};

export default App
