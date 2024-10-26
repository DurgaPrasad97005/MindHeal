import React from "react";
import ResourcesSection from "../components/ResourcesSection";
import image from "../images/cardImg.jpg";
import Footer from "../components/Footer"

function Resources() {
    return (
        <div>
            <ResourcesSection 
                heading = "Books"
                content = "Content for the books"
                cardImg = {image}
                cardTitle = "The Secret"
            />
            
            <ResourcesSection 
                heading = "Articles"
                content = "Content for the Articles"
                cardImg = {image}
                cardTitle = "article"
            />
            
            <ResourcesSection 
                heading = "Blogs"
                content = "Content for the Blogs"
                cardImg = {image}
                cardTitle = "The Blogs"
            />

            <Footer />
        </div>
    )
}

export default Resources;