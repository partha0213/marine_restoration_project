import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Ensure AuthContext is correctly imported
import { Link } from 'react-router-dom'; // Use Link to navigate to login

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h1 align="center">Marine Restoration App</h1>
      <div className="header-right">
        {user ? (
          <div>
            <span>Welcome, {user.name}!</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <span>Please </span>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
