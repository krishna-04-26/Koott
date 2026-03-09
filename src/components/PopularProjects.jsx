import React from 'react';
import ProjectCard from './ProjectCards';
import './PopularProjects.css';

const PopularProjects = () => {
    const projects = [
        {
            id: 1,
            title: 'AI Research Assistant',
            skills: 'Python, Machine Learning, NLP',
            description: 'Building an AI assistant to help researchers find relevant papers quickly and summarize key findings.',
            authorName: 'Alex Johnson',
            authorRole: 'Computer Science',
            authorImage: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2A3B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16V12" stroke="#2A3B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8H12.01" stroke="#2A3B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Web Development Internship',
            skills: 'React, Node.js, MongoDB',
            description: 'Looking for a full-stack developer to join our early-stage startup building a platform for remote workers.',
            authorName: 'Sarah Smith',
            authorRole: 'Startup Founder',
            authorImage: 'https://ui-avatars.com/api/?name=Sarah+Smith&background=random',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#8FA988" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 21H16" stroke="#8FA988" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 18V21" stroke="#8FA988" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'IoT Smart Home System',
            skills: 'C++, Raspberry Pi, AWS',
            description: 'Developing a low-cost, open-source smart home system focusing on energy efficiency and privacy.',
            authorName: 'David Lee',
            authorRole: 'Electrical Engineering',
            authorImage: 'https://ui-avatars.com/api/?name=David+Lee&background=random',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L12 3L21 12" stroke="#A67B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 11V21H9V15H15V21H20V11" stroke="#A67B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="popular-projects container section-spacing">
            <h2 className="section-title">Popular Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default PopularProjects;
