import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/" >Home</Link>

            <ul>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;