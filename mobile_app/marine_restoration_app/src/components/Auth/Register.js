import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
 // Ensure to create a corresponding Register.css for styling

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register, googleSignIn } = useAuth(); // Assuming googleSignIn is provided by useAuth

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await register(email, password);
            // Handle successful registration (e.g., redirect or show success message)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await googleSignIn(); // Perform Google sign-in
            // Handle successful Google sign-in (e.g., redirect or show success message)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
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
                    {loading ? 'Registering...' : 'Register'}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="google-signin">
                Sign in with Google
            </button>
            <div className="register-footer">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
