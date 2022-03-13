import React from "react";
import styles from "./ServiceCard.modules.css"

function ServiceCard(props){

    return(
        <div className="serviceCard">
            <img src="http://via.placeholder.com/70x70" alt="" />
            <h2>{props.serviceTitle}</h2>
            <p>{props.serviceText}</p>
        </div>
    )

}

export default ServiceCard