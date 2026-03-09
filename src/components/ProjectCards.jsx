import React from 'react';
import './ProjectCards.css';

const ProjectCard = ({ title, description, skills, authorName, authorRole, authorImage, icon }) => {
    return (
        <div className="project-card card-shadow">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-icon">{icon}</div>
            </div>

            <div className="card-body">
                <p className="card-skills">{skills}</p>
                <p className="card-description">{description}</p>
            </div>

            <div className="card-footer">
                <div className="author-info">
                    <img src={authorImage} alt={authorName} className="author-avatar" />
                    <div className="author-details">
                        <span className="author-name">{authorName}</span>
                        <span className="author-role">{authorRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
