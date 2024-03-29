import React, {useState} from 'react';
import './static/styles/video.css';

function Project({project}) {

    const [video, setVideo] = useState(false);
    const [fullDescription, setFullDescription] = useState(false);

    return (
        <div className='projectCard'>
            <h3>{project.title}</h3>
            <div className='iframeDiv'>
                <iframe src={`${project.video}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                        className={`iframeVid${video ? '' : ' hidden'}`}
                        webkitallowfullscreen='true'
                        mozallowfullscreen='true'
                        allow='fullscreen'>
                </iframe>
                <img className={`projectScreenshot${video ? ' hidden' : ''}`}
                    src={project.image.src}
                    alt={project.image.alt} />
            </div>
            <button onClick={() => setVideo(!video)}>
                {video ? 'Hide Demo Video' : 'View Demo Video'}
            </button>
            <div className={`projectDescription${fullDescription ? '' : ' closed'}`}>
                {project.description}
            </div>
            <div className='descriptionButtonDiv'>
                <button className='descriptionButton'
                        onClick={() => setFullDescription(!fullDescription)}>
                    {fullDescription ? 'Hide full description' : 'Show full description'}
                </button>
            </div>
            <a href={project.link}
                target='_blank'
                className='projectButton'>
                View Site
            </a>
            <div className='projectRepos'>
                {project.backendFiles &&
                    <a href={project.backendFiles}
                        target='_blank'
                        className='projectButton'>
                        Backend Repo
                    </a>}
                {project.frontendFiles &&
                    <a href={project.frontendFiles}
                        target='_blank'
                        className='projectButton'>
                        Frontend Repo
                    </a>}
                {project.singleRepo &&
                    <a href={project.singleRepo}
                        target='_blank'
                        className='projectButton'>
                        Project Repo
                    </a>}
            </div>
        </div>
    );
};

export default Project;

