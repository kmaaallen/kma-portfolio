import React from "react";
import webdev from '../media/webdev.svg';

export default function About() {
    return (
        <div id="about" data-testid="about" className="App-about">
            <h2 className="App-section-heading">About me <span>(She / Her)</span></h2>
            <div className="App-about-content">
                <img src={webdev} alt="Female web developer" className="App-about-graphic" />
                <div className="App-about-text App-rounded-card">
                    <p>
                        I made the switch from pharmacy to web development when I realized I needed a career that indulged my passion for learning without stifling my creativity.
                        Since completing a diploma in full-stack development I’ve been hooked, working on side projects to hone my skills.
                        <br /><br />
                        I currently work as an Application Development Senior Analyst but am looking to transition to a full-time web development role.
                        <br /><br />
                        When I’m not at my laptop you can find me in the kitchen cooking or running laps around the local common.
                    </p>
                </div>
            </div>
        </div>
    )
};