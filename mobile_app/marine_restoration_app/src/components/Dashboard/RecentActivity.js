import React from 'react';
 // Add styles for RecentActivity

const RecentActivity = ({ activities }) => {
    return (
        <ul className="recent-activity-list">
            {activities.map((activity, index) => (
                <li key={index}>
                    <span>{activity.date}</span>: {activity.description}
                </li>
            ))}
        </ul>
    );
};

export default RecentActivity;
