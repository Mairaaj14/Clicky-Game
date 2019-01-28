import React from 'react';


function Navbar(props) {
    return (
        <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Dragon Ball Z Memory Game</a></li>
            <li class={props}>{props.headTitle}</li>
            <li> Score {props.currentScore} | Top Score {props.topScore}</li>

        </ul>
        </nav>
    )
}

export default Navbar;