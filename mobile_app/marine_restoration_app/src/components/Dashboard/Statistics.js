import React from 'react';
 // Assuming there's a CSS file to style the component

const Statistics = () => {
    // Sample data; replace with real data as needed
    const stats = {
        totalPollutionReports: 120,
        totalRestorationProjects: 15,
        activeVolunteers: 30,
        speciesRestored: 50,
    };

    return (
        <div className="statistics-container">
            
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Pollution Reports</h3>
                    <p>{stats.totalPollutionReports}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Restoration Projects</h3>
                    <p>{stats.totalRestorationProjects}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Volunteers</h3>
                    <p>{stats.activeVolunteers}</p>
                </div>
                <div className="stat-card">
                    <h3>Species Restored</h3>
                    <p>{stats.speciesRestored}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
