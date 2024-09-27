import React from 'react';
// Add styles for Notifications

const Notifications = ({ notifications }) => {
    return (
        <ul className="notifications-list">
            {notifications.map((notification, index) => (
                <li key={index}>{notification.message}</li>
            ))}
        </ul>
    );
};

export default Notifications;
