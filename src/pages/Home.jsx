import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Home;