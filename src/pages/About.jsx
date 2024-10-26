import React from "react";
import AboutHero from "../components/AboutHero";
import AboutFounder from "../components/AboutFounder";
import AboutStory from "../components/AboutStory";
import Footer from "../components/Footer"

function About() {
    return (
        <div>
            <AboutHero />
            <AboutFounder />
            <AboutStory />
            <Footer />
        </div>
    )
}

export default About;