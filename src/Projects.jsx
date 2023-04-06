import React from 'react';
import {projects} from './static/project_data';
import Project from './Project';

function Projects() {

    return (
        <div className='projects'>
            {projects.map(p =>
                <Project key={p.link} 
                        project={p} />)}
        </div>
    );
};

export default Projects;