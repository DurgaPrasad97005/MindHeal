import React from "react";
import "./Introduction.css"

function Introduction() {
    return (
        <div className="introduction">
            <div className="intro">
                <h1>Introduction</h1>
                <p>Welcome to MindHeal.<br />Nurturing Mental Wellness, Empowering Your Journey. <br />MindHeal is a supportive community dedicated to helping individuals prioritize their mental health and well-being. Our mission is to provide accessible resources, guidance, and connection to foster a healthier, happier you.</p>
            </div>

            <div className="empower">
                <h1>Empowering Your Mental Wellbeing</h1>
                <p>At MindHeal, we understand that maintaining good mental health is crucial for a happy and fulfilling life. Our platform offers a comprehensive collection of resources, tools, and guidance to help you navigate life's challenges and cultivate a healthier mindset. Our content is carefully curated to provide you with:</p>
                <ul>
                    <li>-<span>Informative articles</span> on mental health topics, written by experts and individuals who have experienced similar struggles</li>
                    <li>-<span>Engaging videos</span> on mindfulness, self-care, and stress management techniques</li>
                    <li>-<span>Practical exercises</span> and worksheets to help you develop coping strategies and resilience</li>
                    <li>-<span>Personal stories</span> of hope and recovery, inspiring you to take control of your mental wellbeing</li>
                    <li>-<span>Useful tips</span> and advice on maintaining a healthy work-life balance, relationships, and overall wellbeing</li>
                </ul>
            </div>

            <div className="goal">
                <h1>Our Goal</h1>
                <p>MindHeal aims to provide a supportive and non-judgmental space for individuals to explore their mental health, gain knowledge, and develop skills to manage their wellbeing. We are not a replacement for professional medical advice or therapy, but rather a complementary resource to help you take the first steps towards a healthier, happier you.</p>
            </div>

            <div className="expect">
                <h1>What You Can Expect</h1>
                <ul>
                    <li>-A safe and anonymous space to explore your thoughts and feelings</li>
                    <li>-Access to reliable and trustworthy information on mental health</li>
                    <li>-A community that understands and supports your journey</li>
                    <li>-Practical tools and resources to help you manage stress and anxiety</li>
                    <li>-Inspiration and motivation to prioritize your mental wellbeing</li>
                </ul>
            </div>

            <div className="chatbot-container">              
                <div className="chatbot-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                </div>
                
                <div className="chatbot-tip">AI Chatbot</div>
            </div>
        </div>
    )
}

export default Introduction;