import React from 'react';
import "./navbar.scss";

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                    <a href= "#intro" className="logo">det<br/>om<br/>detta </a>

                </div>

                <div className="right">

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                    <ul className="nav-menu">
                        <li><a href= "#intro" className="nav-item">Home</a></li>
                        <li><a href= "#portfolio" className="nav-item">Portfolio</a></li>
                        <li><a href= "#contact" className="nav-item">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
