import React from "react";
import AboutFounder from "../components/AboutFounder";
import AboutStory from "../components/AboutStory";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

function About() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutFounder />
            <AboutStory />
            <Footer />
        </div>
    )
}

export default About;