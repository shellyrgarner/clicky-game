import React from "react";
import "./NavBar.css";

const NavBar = props => {
    // <nav>
    //     <ul>
    //         <li className="NavBar">
    //         <a href="/clicky-game/">{props.title}</a>
    //         </li>

    //         <li id="msg">{props.message}</li>
    //         <li id="score">Score: {props.currentScore} | Top Score: {props.topScore} </li>
    //         </ul>
    //         </nav>

    return (
        <nav className="NavBar navbar-expand-lg">
            <div>{props.title}</div>
            <div>{props.message}</div>
            <div>Score: {props.currentScore} | Top Score: {props.topScore} </div>
        </nav>
    );
};

export default NavBar;
