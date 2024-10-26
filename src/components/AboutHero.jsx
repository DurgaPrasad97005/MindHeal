import React from "react";
import "./AboutHero.css"

export default function AboutHero() {
    return (
        <div className="about-container">
            <div className="about-hero">
                <div className="about-col">
                    <div className="about-row">
                        <h1>Welcome to MindHeal</h1>
                        <h2>Your mental wellness journey starts here.</h2>
                    </div>
                    <div className="about-row">
                        <h2>"Empowering individuals to prioritize mental wellness."</h2>
                    </div>
                </div>
                <div className="about-col">
                    image
                </div>
            </div>
        </div>
    )
}