// frontend/src/hooks/useAuth.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase'; // Import Firebase setup
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    sendPasswordResetEmail, 
    signOut 
} from 'firebase/auth';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false); // Set loading to false when user state is determined
        });
        return unsubscribe;
    }, []);

    // Register function with improved error handling
    const register = async (email, password) => {
        try {
            const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password);
            console.log("New User:", newUser); // Debugging the new user data
            const response = await axios.post('/api/register', { email: newUser.email, uid: newUser.uid });
            console.log("API Response:", response); // Log API response to check registration success
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.error("This email is already in use.");
                throw new Error("This email is already registered. Please login or use a different email.");
            } else {
                console.error("Registration error:", error);
                throw error; // Rethrow for UI handling
            }
        }
    };

    // Login function with improved error handling
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                console.error("Invalid login credentials.");
                throw new Error("Invalid email or password. Please try again.");
            } else {
                console.error("Login error:", error);
                throw error; // Rethrow for UI handling
            }
        }
    };

    // Google sign-in with detailed error handling and debugging
    const googleSignIn = async () => {
        try {
            const { user: googleUser } = await signInWithPopup(auth, googleProvider);
            console.log("Google User:", googleUser); // Debugging the user data
            const response = await axios.post('/api/register', { email: googleUser.email, uid: googleUser.uid });
            console.log("API Response:", response); // Log API response to check registration success
        } catch (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                console.error("An account with this email already exists with a different sign-in method.");
                throw new Error("This email is associated with another account. Try signing in with a different method.");
            } else {
                console.error("Google sign-in error:", error);
                throw error; // Rethrow for UI handling
            }
        }
    };

    // Reset password function
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent.");
        } catch (error) {
            console.error("Password reset error:", error);
            throw new Error("Error sending password reset email. Please try again.");
        }
    };

    // Logout function with error handling
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
            throw error; // Optional: Handle logout error
        }
    };

    // Ensure loading state is handled while auth state is being determined
    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or loading component
    }

    return (
        <AuthContext.Provider value={{ user, register, login, googleSignIn, resetPassword, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
