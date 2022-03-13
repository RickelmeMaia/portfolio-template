import React from "react";
import styles from "./ProjectCard.modules.css"

function ProjectCard(props){

    return(
        <div className="projectCard">
            <div className="projectCardImg">
                <img src={props.projectImage} alt="" />
            </div>
            <div className="projectInfo">
                <h1>{props.projectTitle}</h1>
                <a href={props.projectLink}>GitHub</a>
            </div>
        </div>
    )

}

export default ProjectCard