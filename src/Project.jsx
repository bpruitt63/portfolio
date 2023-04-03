import React from 'react';

function Project({project}) {
    return (
        <>
            <h4>{project.title}</h4>
            <p>{project.image}</p>
            <p>{project.description}</p>
            <p>{project.video}</p>
            <p>{project.link}</p>
            {project.backendFiles &&
                <p>{project.backendFiles}</p>}
            {project.frontendFiles &&
                <p>{project.frontendFiles}</p>}
            {project.singleRepo &&
                <p>{project.singleRepo}</p>}
        </>
    );
};

export default Project;