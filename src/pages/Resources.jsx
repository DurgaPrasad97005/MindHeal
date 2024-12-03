import React from "react";
import ResourcesSection from "../components/ResourcesSection";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { youtubeVideos, articles, blogs } from "../constants/data";

function Resources() {
    return (
        <div>
            <Navbar />

            {/* Youtube videos */}
            <ResourcesSection 
                heading = "Mental Health Mateers"
                content = "Welcome to our video resource section, where you'll find a collection of inspiring and informative videos on mental health and wellness. Our goal is to provide you with valuable insights, practical tips, and supportive guidance to help you navigate life's challenges. From expert advice to personal stories, these videos aim to educate, motivate, and empower you to prioritize your mental health and well-being. Take a moment to explore, learn, and grow with us."
                media = {youtubeVideos}
            />
            
            {/* Articles */}
            <ResourcesSection 
                heading = "Articles"
                content = "Explore the collection of best articles on mental health, wellness, and personal growth. From expert advice to personal stories, these articles aim to educate, inspire, and support you on your journey to better mental health. Browse the latest articles below and discover new insights, strategies, and perspectives to help you heal, grow, and thrive."
                media = {articles}
            />
            
            {/* Blogs */}
            <ResourcesSection 
                heading = "Blogs"
                content = "Our blog section is a curated collection of insightful articles and personal stories from reputable sources around the web. These resources offer expert advice, diverse perspectives, and relatable experiences on mental health and wellness. Explore these informative reads to expand your knowledge, gain new insights, and connect with others who share similar interests."
                media = {blogs}
            />

            <Footer />
        </div>
    )
}

export default Resources;