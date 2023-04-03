import React from 'react';
import {projects} from './static/project_data';
import Project from './Project';

function Projects() {

    return (
        <>
            {projects.map(p =>
                <Project key={p.link} 
                        project={p} />)}
        </>
    );
};

export default Projects;