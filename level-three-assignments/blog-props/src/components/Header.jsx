import React from "react";
import Navbar from "./Navbar";
export default function Header() {
    return (
        <header>
        
        <Navbar />
        <div className="headerContainer">
        <h1>Clean Blog</h1>
        <p>A Blog Theme by Start Bootstrap</p>
        </div>
        <div className="layer"></div>
        </header>
    )
}