import React from "react";
import styles from "./Projects.modules.css"
import ProjectCard from "../fragments/ProjectCard";

function Projects(){

    return(
        <div className="projects">
            <div className="containerTitle">
                <h1 id="projects">Projects</h1>
            </div>
            <div className="projectsGrid">
                <div className="grid1">
                     <ProjectCard projectImage="http://via.placeholder.com/520x320" projectTitle="Titulo" projectLink="https://www.youtube.com"/>
                </div>
                <ProjectCard projectImage="http://via.placeholder.com/520x320" projectTitle="Titulo" projectLink="https://www.youtube.com"/>
                <ProjectCard projectImage="http://via.placeholder.com/520x320" projectTitle="Titulo" projectLink="https://www.youtube.com"/>
                <ProjectCard projectImage="http://via.placeholder.com/520x320" projectTitle="Titulo" projectLink="https://www.youtube.com"/>
                <ProjectCard projectImage="http://via.placeholder.com/520x320" projectTitle="Titulo" projectLink="https://www.youtube.com"/>
            </div>
        </div>
    )
 
}

export default Projects