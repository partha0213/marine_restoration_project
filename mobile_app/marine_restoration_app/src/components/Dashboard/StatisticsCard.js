import React from 'react';
 // Add styles for StatisticsCard

const StatisticsCard = ({ title, value }) => {
    return (
        <div className="statistics-card">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

export default StatisticsCard;
