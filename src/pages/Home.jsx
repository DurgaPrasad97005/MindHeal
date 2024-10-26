import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="home">
            <Hero />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Home;