import React from "react";
import "./Report.css"

export default function Report() {
    return (
        <div className="help-container">
            <div className="report">
                <h3>Report a Technical Issue or Concern</h3>
                <p>Encountered an issue or have a concern?</p>

                <div>
                    <textarea name="" id="" placeholder="Issue description"></textarea>
                    <input type="text" placeholder="Screenshot" />
                    <input type="text" placeholder="Contact information" />
                </div>

                <p>Our team will address your issue promptly.</p>
            </div>
        </div>
    )
}