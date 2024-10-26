import React from "react";
import "../components/ServicesIntro.css"

export default function ServicesIntro() {
    return (
        <div className="services-container">
            <div className="services-intro">
                <h3>At MindHeal, our mission is to bridge the gap between mental health needs and accessible resources. Our Services page is your starting point for exploring our carefully curated tools, articles, and community support.</h3>
            </div>

            <div className="services-section">
                <h1>Resources:</h1>

                <div>
                    <div className="services-card">
                        <h3>Mental Health Articles</h3>
                        <p>A curated list of expert-written articles on mental wellness topics.</p>
                    </div>
                    <div className="services-card">
                        <h3>Videos and Webinars</h3>
                        <p>Educational content from trusted sources on mental health and self-care.</p>
                    </div>
                    <div className="services-card">
                        <h3>Helplines and Emergency Contacts</h3>
                        <p>Critical support resources for immediate assistance.</p>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <h1>Tools and Techniques:</h1>

                <div>
                    <div className="services-card">
                        <h3>Mindfulness Exercises</h3>
                        <p>Guided meditations and relaxation techniques for stress relief.</p>
                    </div>
                    <div className="services-card">
                        <h3>Mood Tracking</h3>
                        <p>Simple worksheets for monitoring emotions and progress.</p>
                    </div>
                    <div className="services-card">
                        <h3>Goal Setting</h3>
                        <p>Templates for setting and achieving mental wellness objectives.</p>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <h1>Community Support:</h1>

                <div>
                    <div className="services-card">
                        <h3>Forum</h3>
                        <p>A safe space for sharing experiences and connecting with others.</p>
                    </div>
                    <div className="services-card">
                        <h3>Social Media Groups</h3>
                        <p>Join our online communities for support and discussion.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}