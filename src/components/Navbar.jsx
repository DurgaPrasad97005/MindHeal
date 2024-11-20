import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-container">
            <div><Link className="a-nav" to="/" >MindHeal</Link><div className="a-nav-underline"></div></div>

            <ul>
                <li><Link className="a-nav" to="/about" >About</Link><hr className="a-nav-underline"></hr></li>
                <li><Link className="a-nav" to="/services">Services</Link><hr className="a-nav-underline"></hr></li>
                <li><Link className="a-nav" to="/resources">Resources</Link><hr className="a-nav-underline"></hr></li>
                <li><Link className="a-nav" to="/store">Store</Link><hr className="a-nav-underline"></hr></li>
                <li><Link className="a-nav" to="/help">Help</Link><hr className="a-nav-underline"></hr></li>
            </ul>
        </nav>
    )
}

export default Navbar;