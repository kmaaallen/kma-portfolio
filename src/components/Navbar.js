import React, { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useCheckWindowWidth } from "../utils";


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [width] = useCheckWindowWidth();

    useLayoutEffect(() => {
        if (width > 700) {
            setShowMenu(false);
        }
    }, [width]);

    return (
        <header className="App-header" >
            <h1>Kirsten Allen</h1>
            <button aria-label="Menu" onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className="App-header-links" style={width > 700 ? { display: "flex" } : showMenu ? { display: "block" } : { display: "none" }}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
};