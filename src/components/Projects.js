import React from 'react';
import ProjectBadge from './ProjectBadge';
import { projectData } from '../data/projectData';

export default function Projects() {
    return (
        <div id="projects" data-testid="projects" className="App-projects App-section-container">
            <h2 className="App-section-heading">Projects</h2>
            <div data-testid="project-badges" className="App-section-flex-display">
                {projectData.map((item) => (
                    <ProjectBadge
                        key={item.title}
                        id={item.title}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                        github={item.github}
                        liveUrl={item.liveUrl} />
                ))}
            </div>
        </div>
    )
};