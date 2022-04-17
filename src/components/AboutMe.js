import React from "react";
import styles from "./AboutMe.modules.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMeLeftContainer">
        <img src="http://via.placeholder.com/280x380" />
      </div>
      <div className="aboutMeRightContainer">
        <h1 id="aboutMe">Competências</h1>
        <p className="centerText">
          Em 2021 concluí o curso de desenvolvimento web básico da
          CodaBR-Clooser mas iniciei meus estudos de Frontend em 2020 e possuo
          mais de 2000 horas de pratica em projetos pessoais e outros cursos
        </p>
        <div className="aboutMeRightContainerInner">
          <div className="aboutMeRightContainerInnerLeft">
            <p className="info">Nome: Jose Rickelme</p>
            <p className="info">wpp: 84 9640-3033</p>
            <p className="info">Discord: RickelmeVGTA#2942</p>
          </div>
          <div className="aboutMeRightContainerInnerRight">
            <p className="info">email: rickelmevgta@gmail.com</p>
            <p className="info">Endereço: RN, Brasil</p>
            <p className="info">Freelancer: Disponivel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
