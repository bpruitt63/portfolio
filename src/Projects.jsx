import React from 'react';
import './static/styles/projects.css';
import {projects} from './static/data/project_data';
import Project from './Project';

function Projects() {

    return (
        <>
            <div id='projects' className='pageAnchor'></div>
            <h2 className='sectionTitle'>Projects</h2>
            <div className='projects'>
                {projects.map(p =>
                    <Project key={p.link} 
                            project={p} />)}
            </div>
        </>
    );
};

export default Projects;