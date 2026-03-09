import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar container">

            <div className="navbar-logo">
                {/* Placeholder for actual logo icon */}
                <div className="logo-icon"></div>

                <Link to="/" className="logo-text">
                    Koott
                </Link>
            </div>

            <ul className="navbar-links">

                <li className="nav-item active">
                    <Link to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/projects">Projects</Link>
                </li>

                <li className="nav-item">
                    <Link to="/opportunities">Opportunities</Link>
                </li>

                <li className="nav-item">
                    <Link to="/dashboard">Dashboard</Link>
                </li>

            </ul>

            <div className="navbar-auth">
                <Link to="/login" className="btn-login">
                    Login
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;