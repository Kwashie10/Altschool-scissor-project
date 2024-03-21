// firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyC1zRmCCEf2nyoxVz7BVP47KiMnthRQdPs",
authDomain: "scissors-5d950.firebaseapp.com",
projectId: "scissors-5d950",
storageBucket: "scissors-5d950.appspot.com",
messagingSenderId: "476000741272",
appId: "1:476000741272:web:d383942604f6259fededed",
measurementId: "G-168MQ33QXT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Firestore
const db = getFirestore(app);

// Function to handle password reset
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true; // Password reset email sent successfully
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error; // Throw error if password reset email fails
  }
};

export { auth, db };




