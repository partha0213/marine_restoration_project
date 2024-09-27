import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resetEmail, setResetEmail] = useState(''); // For reset password
    const [resetSuccess, setResetSuccess] = useState(false); // Success message for password reset
    const { login, googleSignIn, resetPassword } = useAuth();

    // Handle form submission for email/password login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            // Handle successful login (e.g., redirect)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await googleSignIn();
            // Handle successful Google sign-in
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle password reset
    const handlePasswordReset = async () => {
        setError('');
        setResetSuccess(false);
        if (!resetEmail) {
            setError('Please enter your email.');
            return;
        }
        try {
            await resetPassword(resetEmail);
            setResetSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control password"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>

            <div className="divider">OR</div>

            {/* Google Sign-In Button */}
            <button onClick={handleGoogleSignIn} className="google-signin">
                Sign in with Google
            </button>

            {/* Forgot Password Section */}
            <div className="forgot-password">
                <p>Forgot your password?</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="form-control reset-email"
                />
                <button onClick={handlePasswordReset} disabled={!resetEmail}>
                    Reset Password
                </button>
                {resetSuccess && <div className="success-message">Check your email for password reset instructions.</div>}
            </div>

            <div className="login-footer">
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
