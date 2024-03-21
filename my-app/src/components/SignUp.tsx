import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import Material-UI icons
import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup,  } from 'firebase/auth'; // Import Firebase authentication methods
import { auth } from '../firebase'; // Import Firebase authentication and database

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== retypePassword) {
      alert('Passwords do not match. Please make sure your passwords match.');
      return;
    }

    // Check if the password meets the criteria
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 6 characters long and contain at least one number, one uppercase letter, and one lowercase letter.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/Login');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('The provided email address is already in use. Please use a different email address.');
      } else {
        console.error(error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRetypePasswordVisibility = () => {
    setShowRetypePassword(!showRetypePassword);
  };
  const handleGoogleSignUp = async () => {
    try {
      // Create a new GoogleAuthProvider instance
      const provider = new GoogleAuthProvider();

      // Set the 'prompt' option to 'select_account' to force Google to show the account picker
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      // Sign in with Google using signInWithPopup
      const userCredential = await signInWithPopup(auth, provider);

      // Retrieve user information
      const user = userCredential.user;

      // Store user token and details in local storage
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to the main page
      navigate('/');
      setError(null);
    } catch (error: any) {
      setError(error.message);
      console.error("Authentication error:", error);
    }
  };


  
  const handleAppleSignUp = async () => {
    // Handle Apple sign-up logic here
    // This would typically involve redirecting the user to Apple's authentication service
    // and then processing the response to create a new user in your system
  };

  return (
    <div>
      <div className="signup-container">
        <h2 className="h2_signup">Sign Up with:</h2>
        {/* Buttons for Google and Apple */}
        <button type="button" className="google-btn" onClick={handleGoogleSignUp}>
          <img src="/assets/google_logo.png" alt="google" /> Google
        </button>
        <button type="button" className="apple-btn" onClick={handleAppleSignUp}>
          <img src="/assets/apple_logo.png" alt="" /> Apple
        </button>

        <p>
          <img src="/assets/line_scissor.png" alt="" className="line-scissor" />
          Or
          <img src="/assets/line_scissor.png" alt="" className="line-scissor" />
        </p>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="signup-form">
            <label htmlFor="username">Username</label>
            <input
              className="input-password"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          {/* Email */}
          <div className="signup-form">
            <label htmlFor="email">Email</label>
            <input
         
              className="input-password"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          {/* Password */}
          <div className="signup-form">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
               
                className="input-password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {showPassword ? (
                <Visibility
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <VisibilityOff
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          {/* Retype Password */}
          <div className="signup-form">
            <label htmlFor="retypePassword">Retype Password</label>
            <div className="password-input">
              <input
                className="input-password"
                type={showRetypePassword ? "text" : "password"}
                id="retypePassword"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                placeholder="Retype Password"
              />
              {showRetypePassword ? (
                <Visibility
                  className="eye-icon"
                  onClick={toggleRetypePasswordVisibility}
                />
              ) : (
                <VisibilityOff
                  className="eye-icon"
                  onClick={toggleRetypePasswordVisibility}
                />
              )}
            </div>
          </div>
          {/* Password requirements */}
          <p className="p-line">
            6 or more characters, one number, one uppercase & one lowercase.
          </p>
          {/* Submit button */}
          <button type="submit" className="login-btn">
            Sign up
          </button>
        </form>
        {/* Log In link */}
        <p>
          Already have an account?{' '}
          <Link to="/Login">
            <span className="span-login">Log In</span>
          </Link>
        </p>
        {/* Agreement text */}
        <p className="p_link">
          By signing up, you agree to Sciccor's{' '}
          <a href="#d">Terms of Service</a>, <a href="#d">Privacy Policy</a>, and{' '}
          <a href="d#">Acceptable Use Policy</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
