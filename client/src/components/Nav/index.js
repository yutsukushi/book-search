import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Google Books
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link 
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                    to="/search">
                        Search 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                    to="/saved">
                    Saved
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
        </BrowserRouter>
    )
}

export default Navbar;