// src/services/api.js

import axios from 'axios';

// Base URL for the API (to be replaced with your actual backend URL)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://your-backend-url.com/api';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,  // Request timeout after 10 seconds
});

// Add request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (token might be invalid or expired)
      // Optionally log out the user or refresh the token here
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';  // Redirect to login page
    }
    return Promise.reject(error);
  }
);

/**
 * Auth API Calls
 */
export const loginUser = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const registerUser = (userData) => {
  return api.post('/auth/register', userData);
};

export const getUserProfile = () => {
  return api.get('/auth/profile');
};

/**
 * Pollution Data API Calls
 */
export const fetchPollutionData = () => {
  return api.get('/pollution/data');
};

export const reportPollution = (pollutionData) => {
  return api.post('/pollution/report', pollutionData);
};

export const fetchPollutionByLocation = (latitude, longitude) => {
  return api.get(`/pollution/location?lat=${latitude}&lon=${longitude}`);
};

/**
 * Utility function to set API authorization header manually (useful in certain cases)
 */
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.Authorization;
  }
};

export default api;
