import React, {useState} from 'react';
import './static/styles/video.css';

function Project({project}) {

    const [video, setVideo] = useState(false);

    return (
        <div className='projectCard'>
            <h3>{project.title}</h3>
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
            <a href={project.link}
                target='blank'
                className='projectButton'>
                View Site
            </a>
            <div className='projectRepos'>
                {project.backendFiles &&
                    <a href={project.backendFiles}
                        target='blank'
                        className='projectButton'>
                        Backend Repo
                    </a>}
                {project.frontendFiles &&
                    <a href={project.frontendFiles}
                        target='blank'
                        className='projectButton'>
                        Frontend Repo
                    </a>}
                {project.singleRepo &&
                    <a href={project.singleRepo}
                        target='blank'
                        className='projectButton'>
                        Project Repo
                    </a>}
            </div>
        </div>
    );
};

export default Project;

