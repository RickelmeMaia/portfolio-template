import React from "react";
import styles from "./NavBar.modules.css"

function NavBar(){
    return(
        <div className="navBar">
                <a href="#aboutMe">About Me</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
        </div>
    )
}

export default NavBar