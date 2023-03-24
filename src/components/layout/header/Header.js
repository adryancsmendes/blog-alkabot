import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo_icon.png";
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import "./Header.modules.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            {/* Header para dispositivos móveis */}
            <header className="Header--mobile">
                <div className="Header__logo">
                    <Link to="/" className="Header__logo-link">
                        <img src={logo} alt="Logo do site" className="Header__logo-img" />
                    </Link>
                </div>
                <button className="Header__menu-button" onClick={handleMenuClick}>
                    {isMenuOpen ? (
                        <GrClose />
                    ) : (
                        <FiMenu />
                    )}
                </button>
                <nav className={`Header__nav ${isMenuOpen ? "Header__nav--open" : ""}`}>
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">
                            <Link to="#" className="Header__nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/blog" className="Header__nav-link Header__nav-link--active">
                                Blog
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="#" className="Header__nav-link">
                                Resources
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/" className="Header__nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/" className="Header__nav-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Header para desktop */}
            <header className="Header--desktop">
                <div className="Header__logo">
                    <Link to="/" className="Header__logo-link">
                        <img src={logo} alt="Logo do site" className="Header__logo-img" />
                    </Link>
                </div>
                <nav className="Header__nav">
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">
                            <Link to="#" className="Header__nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/blog" className="Header__nav-link Header__nav-link--active">
                                Blog
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="#" className="Header__nav-link">
                                Resources
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/" className="Header__nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="Header__nav-item">
                            <Link to="/" className="Header__nav-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
