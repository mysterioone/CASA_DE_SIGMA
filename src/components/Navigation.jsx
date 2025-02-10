import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbutton">
            <div>
                <img className="Background" src="src/image/background casa de sigma.png" alt="" />
            </div>
            <div className="container">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <div className="separator"></div>
                    <li><Link to="/news">Product</Link></li>
                    <div className="separator"></div>
                    <li><Link to="/contact">Settings</Link></li>
                    <div className="separator"></div>
                    <li><Link to="/contact">About us</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;