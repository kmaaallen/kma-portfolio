import React from 'react';
import { faCss3Alt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import SkillBadge from './SkillBadge';

export default function Skills() {
    return (
        <div id="skills" data-testid="skills" className="App-skills App-section-container">
            <h2 className="App-section-heading" >Skills</h2>
            <div className="App-section-flex-display App-rounded-card">
                <SkillBadge id="html" icon={faHtml5} label="HTML" color="#E34C26" />
                <SkillBadge id="css" icon={faCss3Alt} label="CSS" color="#264DE4" />
                <SkillBadge id="javascript" icon={faJsSquare} label="JavaScript" color="#F0DB4F" />
                <SkillBadge id="react" icon={faReact} label="React" color="#61DBFB" />
            </div>
        </div>
    )
};