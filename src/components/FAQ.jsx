import React from "react";
import "./FAQ.css"

export default function FAQ() {
    return (
        <div className="help-container">
            <div className="faq">
                <h3>Frequently Asked Questions</h3>

                <div className="query">
                    <h3 className="question">How do I create an account?</h3>
                    <p className="answer">Click "Sign Up" and follow the registration process.</p>
                </div>

                <div className="query">
                    <h3 className="question">What types of resources are available?</h3>
                    <p className="answer">We offer articles, videos, podcasts, and expert advice.</p>
                </div>

                <div className="query">
                    <h3 className="question">I'm experiencing technical issues. What should I do?</h3>
                    <p className="answer">Contact our support team via email or report an issue.</p>
                </div>
            </div>
        </div>
    )
}