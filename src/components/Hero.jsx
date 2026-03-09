import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Find Your<br />
                    <span className="text-accent">Campus Team</span>
                </h1>
                <p className="hero-subtitle">
                    Connect with peers and form amazing project<br />
                    teams for competitions, internships, and research.
                </p>

                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search skills, projects..."
                            className="search-input"
                        />
                    </div>
                    <button className="btn-get-started">Get Started</button>
                </div>
            </div>

            <div className="hero-illustration">
                {/* Placeholder for the illustration of students collaborating */}
                <div className="illustration-placeholder">
                    {/* We'll use CSS to rough in the shapes from the image */}
                    <div className="person person-1"></div>
                    <div className="person person-2"></div>
                    <div className="person person-3"></div>
                    <div className="person person-4"></div>
                    <div className="laptop"></div>
                    <div className="table"></div>
                    <div className="speech-bubble"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
