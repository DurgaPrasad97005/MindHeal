import React from "react";
import "./Terms.css"

export default function Terms() {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return (
        <div className="help-container">
            <div className="terms">
                <h3>MindHeal Terms of Use</h3>
                <p>Last updated : {date + "/" + month + "/" + year}</p>
                <p>By using MindHeal, you agree to our terms and conditions, including:</p>
                <ul>
                    <li>-User responsibilities</li>
                    <li>-Intellectual property rights</li>
                    <li>-Disclaimer of warranties</li>
                    <li>-Limitation of liability</li>
                </ul>
            </div>
        </div>
    )
}