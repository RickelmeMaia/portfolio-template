import React from "react";
import styles from "./ProjectCard.modules.css";

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div className="projectCardImg">
        <img src={props.projectImage} alt="" />
      </div>
      <div className="projectInfo">
        <h1>{props.projectTitle}</h1>
        <div className="projectCardBtn">
          <a target="_blank" href={props.projectGit}>
            GitHub
          </a>
          <a target="_blank" href={props.projectLink}>
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
