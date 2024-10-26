import React from "react";
import "../components/ResourcesSection.css"

export default function ResourcesSection(props) {
    return (
        <div className="resources-container">
            <h2 className="resources-heading">{props.heading}</h2>
            <p className="resources-description">{props.content}</p>

            <div className="resources-section">
                <div className="resources-card">
                    <img src={props.cardImg} alt="" className="card-img" />
                    <h3 className="card-title">{props.cardTitle}</h3>
                </div>

                <div className="resources-card">
                    <img src={props.cardImg} alt="" className="card-img" />
                    <h3 className="card-title">{props.cardTitle}</h3>
                </div>

                <div className="resources-card">
                    <img src={props.cardImg} alt="" className="card-img" />
                    <h3 className="card-title">{props.cardTitle}</h3>
                </div>
                
                <div className="resources-card">
                    <img src={props.cardImg} alt="" className="card-img" />
                    <h3 className="card-title">{props.cardTitle}</h3>
                </div>
            </div>
        </div>
    )
}