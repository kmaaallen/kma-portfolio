import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function ProjectBadge(props) {
    return (
        <div id={props.id} className='App-project-badge App-rounded-card'>
            <div className="App-flip-card">
                <div className="App-flip-inner">
                    <div className="App-flip-front">
                        <img src={props.src} alt={props.alt} className="App-project-graphic" />
                    </div>
                    <div className="App-flip-back">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <h3>{props.title}</h3>
            <div className="App-section-flex-display">
                <a href={props.github} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithubSquare} />Github</a>
                {props.liveUrl ? (<a href={props.liveUrl} target="_blank" rel="noreferrer" >See it live<FontAwesomeIcon icon={faExternalLinkAlt} /></a>) : null}
            </div>
        </div>
    )
}