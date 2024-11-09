import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Resources from "../pages/Resources"
import Store from "../pages/Store"
import Help from "../pages/Help"
import HealChat from "../pages/HealChat";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/store" element={<Store />} />
                <Route path="/help" element={<Help />} />
                <Route path="/healchat" element={<HealChat />} />
            </Routes>
        </div>
    )
}

export default App;