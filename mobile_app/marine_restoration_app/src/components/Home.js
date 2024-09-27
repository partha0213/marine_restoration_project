import React from 'react';
import { Link } from 'react-router-dom';
 // Assuming you have a corresponding CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MERP</h1>
          <p>
            Join us in restoring marine ecosystems and mitigating pollution. Explore real-time pollution data and contribute to our mission.
          </p>
          <Link to="/report" className="cta-button">Report Pollution</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-leaf feature-icon"></i>
            <h3>Ecosystem Restoration</h3>
            <p>Get involved in active restoration projects and track progress.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-water feature-icon"></i>
            <h3>Real-Time Pollution Monitoring</h3>
            <p>View live data on marine pollution levels and trends.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-chart-line feature-icon"></i>
            <h3>Data Visualization</h3>
            <p>Analyze pollution data through interactive charts and maps.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-users feature-icon"></i>
            <h3>Community Engagement</h3>
            <p>Connect with volunteers and experts working towards a cleaner ocean.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Take Action Today</h2>
        <p>Help protect marine biodiversity and improve the health of our oceans.</p>
        <Link to="/register" className="cta-button">Join Us</Link>
      </section>
    </div>
  );
};

export default Home;
