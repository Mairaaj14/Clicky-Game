import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Dragon Ball Z Memory Game</a></li>
            <li className={props.headTitle}></li>
            <li> Score {props.currentScore} | Top Score {props.topScore}</li>

        </ul>
        </nav>
    )
}

export default Navbar;