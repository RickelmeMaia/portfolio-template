import React from "react";
import styles from "./NavBar.modules.css";

function NavBar() {
  return (
    <div className="navBar">
      <a href="#aboutMe">Sobre</a>
      <a href="#services">Serviços</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </div>
  );
}

export default NavBar;
