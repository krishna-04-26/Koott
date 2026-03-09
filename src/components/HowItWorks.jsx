import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            number: '1',
            title: '1. Create Profile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            btnText: 'Show me'
        },
        {
            id: 2,
            number: '2',
            title: '2. Join Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            btnText: 'Start now'
        },
        {
            id: 3,
            number: '3',
            title: '3. Collaborate Easily',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            btnText: 'Learn more'
        }
    ];

    return (
        <section className="how-it-works container section-spacing">
            <h2 className="section-title">How Koott Works</h2>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div key={step.id} className="step-card card-shadow">
                        <div className="step-number-wrapper">
                            <div className="step-number">{step.number}</div>
                        </div>

                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>

                        <button className="btn-step">{step.btnText}</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
