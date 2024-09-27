import React from 'react';
// Ensure you import the CSS file


const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <div className="about-section">
                <h3>Our Mission</h3>
                <p>
                    At MERP (Marine Environmental Restoration Project), our mission is to restore and protect marine ecosystems through innovative solutions and community engagement. We strive to create a sustainable environment for future generations.
                </p>
            </div>
            <div className="about-section">
                <h3>What We Do</h3>
                <p>
                    We work on various initiatives, including pollution monitoring, habitat restoration, and community outreach programs. Our multidisciplinary team collaborates with local communities, researchers, and policymakers to address pressing environmental issues.
                </p>
            </div>
            <div className="about-section">
                <h3>Meet the Team</h3>
                <p>
                    Our team consists of dedicated professionals with expertise in marine biology, environmental science, and community engagement. Together, we are committed to making a positive impact on our oceans.
                </p>
                <img 
                    src="./download.jpg" 
                    alt="Our Team" 
                    className="about-image" 
                />
            </div>
            <div className="about-section">
                <h3>Get Involved</h3>
                <p>
                    Join us in our efforts to restore marine ecosystems! Whether you're a volunteer, donor, or partner organization, there are many ways to get involved and make a difference.
                </p>
                <a href="/contact" className="btn-learn-more">Learn More</a>
            </div>
        </div>
    );
};

export default About;
