import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as Scroll } from 'react-router-hash-link';
import Footer from "./Footer";

function PageWrapper(props) {
    // This state will track whether the navbar is expanded or not.
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={() => setIsNavExpanded(false)}>HOME</Link>
                    <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded={isNavExpanded} 
                        aria-label="Toggle navigation"
                        onClick={() => setIsNavExpanded(!isNavExpanded)}>
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <Scroll className="nav-link" to="#services" onClick={() => setIsNavExpanded(false)}>Services</Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll className="nav-link" to="#portfolio" onClick={() => setIsNavExpanded(false)}>Portfolio</Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll className="nav-link" to="#team" onClick={() => setIsNavExpanded(false)}>Team</Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll className="nav-link" to="#contact" onClick={() => setIsNavExpanded(false)}>Contact</Scroll>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carCollection" onClick={() => setIsNavExpanded(false)}>Car Collection</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}
            <Footer/>
        </div>
    );
}

export default PageWrapper;
