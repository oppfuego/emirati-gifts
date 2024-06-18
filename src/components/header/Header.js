import React, { useState } from 'react';
import './Header.css';
import {ReactComponent as EmiratiLogo} from "../../img/emirati-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BiBasket } from "react-icons/bi";



const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleBurgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseClick = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="header-container">
            <Link to="/">
                <EmiratiLogo className="esync-logo"/>
            </Link>
            <div className="header-nav">
                <nav>
                    <Link className="nav-link" to="/checkout">Business</Link>
                    <Link className="nav-link" to="/cart-details">Gift Cards</Link>
                    <Link className="nav-link" to="/cart-details">Contact Us </Link>
                    <Link className="nav-link" to="/legal">Legal</Link>
                </nav>
            </div>
            <div className="section-header">
                <button className="header-option-button">
                    Facebook
                </button>
                <button className="header-option-button">
                    Instagram
                </button>
                <button className="header-option-button">
                    TikTok
                </button>
            </div>
            <div className="icons-section">
                <button className="header-icons-button">
                    <CiSearch/>
                </button>
                <button className="header-icons-button">
                    <CiHeart/>
                </button>
                <button className="header-icons-button">
                    <BiBasket/>
                </button>
            </div>


            <div className="header-nav-mobile">
                <button className="sign-in-button">Sign In</button>
                <button className="burger-button" onClick={handleBurgerClick}>
                    <RxHamburgerMenu size={30}/>
                </button>
            </div>
            {sidebarOpen && (
                <div className="sidebar">
                    <button className="close-button" onClick={handleCloseClick}><FaTimes/></button>
                    <section>
                        <Link className="nav-link" to="/enterprise">Internet</Link>
                        <Link className="nav-link" to="/virtualnumbers">Virtual numbers</Link>
                        <Link className="nav-link" to="/compability-devices">Compatible devices</Link>
                        <Link className="nav-link" to="/regions">More</Link>
                    </section>
                    <button className="get-started-button">Get started</button>
                </div>
            )}
        </div>
    );
};

export default Header;