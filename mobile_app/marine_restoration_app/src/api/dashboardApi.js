// src/api/dashboardApi.js
export const getDashboardData = async () => {
    // Simulated API call to fetch dashboard data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                recentActivities: [
                    { id: 1, description: 'Cleaned up the beach', date: '2024-09-23' },
                    { id: 2, description: 'Planted 50 trees', date: '2024-09-22' },
                ],
                notifications: [
                    { id: 1, message: 'New volunteer signed up', date: '2024-09-24' },
                    { id: 2, message: 'Upcoming event on 2024-09-30', date: '2024-09-23' },
                ],
            });
        }, 1000);
    });
};
