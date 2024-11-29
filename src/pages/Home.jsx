import React from "react";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import AboutHero from "../components/AboutHero";

function Home() {
    return (
        <div className="home" style={{ backgroundColor: "lightbrown" }}>
            <Navbar />
            <AboutHero />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Home;