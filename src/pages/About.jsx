import React from "react";
import AboutHero from "../components/AboutHero";
import AboutFounder from "../components/AboutFounder";
import AboutStory from "../components/AboutStory";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function About() {
    return (
        <div>
            <Navbar />
            <AboutHero />
            <AboutFounder />
            <AboutStory />
            <Footer />
        </div>
    )
}

export default About;