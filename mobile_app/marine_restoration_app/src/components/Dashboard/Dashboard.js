import React, { useEffect, useState } from 'react'; // Ensure this CSS file exists
import Statistics from './Statistics'; // Ensure this component exists
import RecentActivity from './RecentActivity'; // Ensure this component exists
import Notifications from './Notifications'; // Ensure this component exists
import { getDashboardData } from '../../api/dashboardApi'; // Ensure API function exists and returns correct data

const Dashboard = () => {
    const [recentActivities, setRecentActivities] = useState([]); // Default empty array to avoid undefined errors
    const [notifications, setNotifications] = useState([]); // Default empty array
    const [loading, setLoading] = useState(true); // Loading state to indicate API call

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const data = await getDashboardData(); // Fetch data from API
                if (data) {
                    // Ensure data is structured as expected
                    setRecentActivities(data.recentActivities || []); // Provide fallback if no recentActivities
                    setNotifications(data.notifications || []); // Provide fallback if no notifications
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error); // Log the error
            } finally {
                setLoading(false); // Set loading to false after data fetch or error
            }
        };

        fetchDashboardData();
    }, []); // Empty dependency array to run effect once when component mounts

    if (loading) {
        return <div>Loading...</div>; // Show loading state while waiting for data
    }

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="statistics-section">
                <h2>Statistics Overview</h2>
                <Statistics /> {/* Assuming the Statistics component is correctly defined */}
            </div>
            <div className="recent-activity-section">
                <h3>Recent Activities</h3>
                {recentActivities.length > 0 ? (
                    <RecentActivity activities={recentActivities} /> // Ensure this component takes the right prop
                ) : (
                    <p>No recent activities available.</p> // Fallback in case there's no activity
                )}
            </div>
            <div className="notifications-section">
                <h3>Notifications</h3>
                {notifications.length > 0 ? (
                    <Notifications notifications={notifications} /> // Ensure this component takes the right prop
                ) : (
                    <p>No notifications available.</p> // Fallback in case there are no notifications
                )}
            </div>
        </div>
    );
};

export default Dashboard;
