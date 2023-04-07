import React, {useState} from 'react';
import './static/styles/video.css';

function Project({project}) {

    const [video, setVideo] = useState(false);

    return (
        <div className='projectCard'>
            <h4>{project.title}</h4>
            <img className='projectScreenshot'
                src={project.image.src}
                alt={project.image.alt} />
            <button onClick={() => setVideo(!video)}>
                {video ? 'Hide Demo Video' : 'View Demo Video'}
            </button>
            {video && 
                <div className='iframeDiv'>
                    <iframe src={`${project.video}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                            className='iframeVid'
                            webkitallowfullscreen='true'
                            mozallowfullscreen='true'
                            allow='fullscreen'>
                    </iframe>
                </div>}
            <p>{project.description}</p>
            <p>{project.link}</p>
            {project.backendFiles &&
                <p>{project.backendFiles}</p>}
            {project.frontendFiles &&
                <p>{project.frontendFiles}</p>}
            {project.singleRepo &&
                <p>{project.singleRepo}</p>}
        </div>
    );
};

export default Project;

