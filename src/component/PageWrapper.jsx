import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { HashLink as Scroll } from 'react-router-hash-link';
import Footer from "./Footer";
import { useAuth } from '../component/login/AuthContext'; 


function PageWrapper(props) {
      const navigate = useNavigate();

    // This state will track whether the navbar is expanded or not.
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { isLoggedIn, logout } = useAuth(); // Assuming isLoggedIn is part of useAuth



   
    const handelout =() =>{
        setIsNavExpanded(false)
        logout()
    }
     
    


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
                           
                            {isLoggedIn &&(
                                <li className="nav-item">
                                    <Link className="nav-link" to="/carCollection" onClick={() => setIsNavExpanded(false)}>Car Collection</Link>
                                </li>
                            )
                            }
                            {/* additional nav items... */}
                            {!isLoggedIn && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={handelout}>Logout</Link>
                                </li>
                            )}
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
