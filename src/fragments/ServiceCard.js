import React from "react";
import styles from "./ServiceCard.modules.css";

function ServiceCard(props) {
  return (
    <div className="serviceCard">
      <img src={props.imgSrc} alt="" />
      <h2>{props.serviceTitle}</h2>
      <p>{props.serviceText}</p>
    </div>
  );
}

export default ServiceCard;
