import React from 'react';
import './Opportunities.css';

const OpportunityCard = ({ title, description, skills, authorName, authorImage, icon, bgColor }) => {
    return (
        <div className="opportunity-card" style={{ backgroundColor: bgColor }}>
            <div className="opp-content">
                <h3 className="opp-title">{title}</h3>
                <p className="opp-skills">{skills}</p>
                <p className="opp-description">{description}</p>

                <div className="author-info mt-auto">
                    <img src={authorImage} alt={authorName} className="author-avatar-small" />
                    <span className="author-name-small">{authorName}</span>
                </div>
            </div>
            <div className="opp-icon-wrapper">
                <div className="opp-icon">{icon}</div>
            </div>
        </div>
    );
};

const Opportunities = () => {
    const opportunities = [
        {
            id: 1,
            title: 'Data Science Internship',
            skills: 'Python, SQL, Tableau',
            description: 'Join our fast-growing fintech startup for a summer internship focused on predictive modeling.',
            authorName: 'Eliza Wong, Tech Lead',
            authorImage: 'https://ui-avatars.com/api/?name=Eliza+Wong&background=random',
            bgColor: '#EAF0DC', // Light green matches the original design
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2C3539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16V12" stroke="#2C3539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8H12.01" stroke="#2C3539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'UX Design Challenge',
            skills: 'Figma, User Research',
            description: 'Participate in our weekend design sprint focused on accessible healthcare interfaces.',
            authorName: 'Marcus Cole, Design Dir',
            authorImage: 'https://ui-avatars.com/api/?name=Marcus+Cole&background=random',
            bgColor: '#E6EBF5', // Light blue matches the original design
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#2C3539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="#2C3539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="opportunities-section container section-spacing">
            <div className="section-header-row">
                <h2 className="section-title mb-0">Opportunities for You</h2>
                <button className="btn-view-all">VIEW ALL</button>
            </div>

            <div className="opportunities-grid">
                {opportunities.map((opp) => (
                    <OpportunityCard key={opp.id} {...opp} />
                ))}
            </div>
        </section>
    );
};

export default Opportunities;
