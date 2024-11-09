import React from "react";
import HelpIntro from "../components/HelpIntro";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Report from "../components/Report";
import HelpResources from "../components/HelpResources";
import Terms from "../components/Terms";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function Help() {
    return (
        <div>
            <Navbar />
            <HelpIntro />
            <FAQ />
            <Contact />
            <Report />
            <HelpResources />
            <Terms />
            <Footer />
        </div>
    )
}

export default Help;