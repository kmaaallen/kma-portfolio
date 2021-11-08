import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillBadge(props) {
    return (
        <div id={props.id} className='App-skill-badge'>
            <FontAwesomeIcon icon={props.icon} className="App-badge-icon" style={{ color: props.color }} />
            <h3>{props.label}</h3>
        </div>
    )
}