import React from "react";
import ServiceCard from "../fragments/ServiceCard";
import styles from "./Services.modules.css";
import htmlLogo from "../img/html.png";
import cssLogo from "../img/css-3.png";
import javascriptLogo from "../img/javascript.png";
import reactjsLogo from "../img/react.png";
import gitLogo from "../img/git.png";
import phpLogo from "../img/php.png";

function Services() {
  return (
    <div className="services">
      <div className="servicesTitle">
        <h1 id="services">Tecnologias</h1>
      </div>
      <div className="servicesCardContainer">
        <ServiceCard imgSrc={htmlLogo} serviceTitle="HTML" />
        <ServiceCard imgSrc={cssLogo} serviceTitle="CSS" />
        <ServiceCard imgSrc={javascriptLogo} serviceTitle="Javascript" />
        <ServiceCard imgSrc={reactjsLogo} serviceTitle="ReactJS" />
        <ServiceCard imgSrc={gitLogo} serviceTitle="Git" />
        <ServiceCard imgSrc={phpLogo} serviceTitle="PHP" />
      </div>
    </div>
  );
}

export default Services;
