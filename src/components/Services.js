import React from "react";
import ServiceCard from "../fragments/ServiceCard";
import styles from "./Services.modules.css"

function Services(){

    return(
        <div className="services">
            <div className="servicesTitle">
                <h1>Services</h1>
            </div>
           <div className="servicesCardContainer">
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>
             <ServiceCard serviceTitle="WebDesign" serviceText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse consequatur laborum aliquid assumenda exercitationem dicta, praesentium suscipit"/>           
           </div>
        </div>
    )

}

export default Services