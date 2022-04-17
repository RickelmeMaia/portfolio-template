import React from "react";
import styles from "./Contact.modules.css";
import discord from "../img/discord.png";
import whatsapp from "../img/whatsapp.png";
import email from "../img/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="contactContainerLeft">
          <h1 id="contact">Me Contate</h1>
          <p>Você pode me contatar por aqui!</p>
        </div>
        <div className="contactContainerRight">
          <div className="contactInfo">
            <img src={discord} alt="" />
            <h2>RickelmeVGTA#2942</h2>
          </div>
          <div className="contactInfo">
            <img src={email} alt="" />
            <h2>rickelmevgta@gmail.com</h2>
          </div>
          <div className="contactInfo">
            <img src={whatsapp} alt="" />
            <h2>84 9640-3033</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
