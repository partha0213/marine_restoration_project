import React, { createContext, useContext, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Example state for user

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Default export (optional, if you want to keep it named export)
export default AuthProvider; // Ensure this line is here if you want a default export
