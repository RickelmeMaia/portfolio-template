import React from "react";
import styles from "./AboutMe.modules.css"

function AboutMe(){
    return(
        <div className="aboutMe">
            <div className="aboutMeLeftContainer">
                <img src="http://via.placeholder.com/280x380" alt="Uma foto minha" />
            </div>
            <div className="aboutMeRightContainer">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit illum ea? Nesciunt eveniet esse iusto totam dolorum quam officia quo adipisci!</p>
                <div className="aboutMeRightContainerInner">
                    <div className="aboutMeRightContainerInnerLeft">
                        <p className="info">Name: Jose Rickelme</p>    
                        <p className="info">Number: 90 90909090</p>
                        <p className="info">Discord: Rickelme#0000</p>
                    </div>
                    <div className="aboutMeRightContainerInnerRight">
                        <p className="info">Age: 18</p> 
                        <p className="info">Adress: RN, Brazil</p>   
                        <p className="info">Freelance: Avaliable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe