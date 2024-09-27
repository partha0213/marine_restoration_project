import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxZL38QimaNMRUS1w5F53xZJEYSjXHfvM",
    authDomain: "marinerestorationapp.firebaseapp.com",
    projectId: "marinerestorationapp",
    storageBucket: "marinerestorationapp.appspot.com",
    messagingSenderId: "125870998411",
    appId: "1:125870998411:android:687152d964a3fa4b4c658e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers for social login (Google)
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup };
