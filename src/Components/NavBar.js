import { useRef, useState} from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/main.css";




function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    

    return (        
        <header >
            <h3> <a href="#Home"> ‹VM /› </a> </h3>
            <nav ref={navRef} >
                <a href="#Home">Home</a>
                <a href="#tecnologia">Tecnologias</a>
                <a href="#Contato">Contato</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes /> 
                </button>
            </nav>
                <button className="nav-btn nav" onClick={showNavbar}>
                    <FaBars /> 
                </button>
        </header>
        
    );
}

export default Navbar;