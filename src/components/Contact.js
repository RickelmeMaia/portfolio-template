import React from "react";
import styles from "./Contact.modules.css"

function Contact(){

    return(
        <div className="contact">
            <div className="contactContainer">
                <div className="contactContainerLeft">
                    <h1 id="contact">Contact Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maxime sapiente. Accusamus voluptates deleniti magnam!</p>
                </div>
                <div className="contactContainerRight">
                    <div className="contactInfo">
                        <img src="http://via.placeholder.com/60x60" alt="" />
                        <h2>Rickelme#0000</h2>
                    </div>
                    <div className="contactInfo">
                        <img src="http://via.placeholder.com/60x60" alt="" />
                        <h2>rickelmevgta@gmail.com</h2>
                    </div>
                    <div className="contactInfo">
                        <img src="http://via.placeholder.com/60x60" alt="" />
                        <h2>90 90909090</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact
