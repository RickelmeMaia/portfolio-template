import React from "react";
import styles from "./Projects.modules.css";
import ProjectCard from "../fragments/ProjectCard";
import bank from "../img/bank.png";
import notes from "../img/notes.png";
import portfolio from "../img/portfolio.png";

function Projects() {
  return (
    <div className="projects">
      <div className="containerTitle">
        <h1 id="projects">Projetos</h1>
      </div>
      <div className="projectsGrid">
        <div className="grid1">
          <ProjectCard
            projectImage={bank}
            projectTitle="Onepage de um banco"
            projectLink="https://rmbank.netlify.app/"
            projectGit="https://github.com/RickelmeMaia/Bank-Page"
          />
        </div>
        <div className="grid2">
          <ProjectCard
            projectImage={notes}
            projectTitle="Notes crud"
            projectLink="https://rmnotesapplication.netlify.app/"
            projectGit="https://github.com/RickelmeMaia/note-app-ReactJS-Firebase"
          />
        </div>
        <div className="grid3">
          <ProjectCard
            projectImage={portfolio}
            projectTitle="Portfolio"
            projectLink="https://rmpersonalportfolio.netlify.app/"
            projectGit="https://github.com/RickelmeMaia/portfolio-template"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
