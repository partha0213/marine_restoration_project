import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ReportPollution from './components/Pollution/ReportPollution';
import PollutionMap from './components/Pollution/PollutionMap';
import Statistics from './components/Dashboard/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact'; 
import About from './components/About'; // Import the About component
import PrivateRoute from './components/PrivateRoute';
import './App.css';


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        // 
                        <Route path="/login" element={<Login/>} />
                        <Route path="/logout" element={<Login />} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/report" element={<PrivateRoute><ReportPollution /></PrivateRoute>} />
                        <Route path="/report-pollution" element={<PrivateRoute><ReportPollution /></PrivateRoute>} />
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> {/* Ensure this route exists */}
                        <Route path="/pollution-map" element={<PrivateRoute><PollutionMap /></PrivateRoute>} />
                        <Route path="/statistics" element={<PrivateRoute><Statistics /></PrivateRoute>} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} /> {/* Added About Route */}
                        <Route path="*" element={<h2 className="text-center mt-2">404 - Page Not Found. Please check the URL or go back to the <a href="/">Home</a> page.</h2>} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
