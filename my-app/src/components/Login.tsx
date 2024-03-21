import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';
import { auth,  } from "../firebase";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Alert } from '@mui/material';
// import { signInWithApple } from "firebase-apple-auth";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect the user to the appropriate page after successful login
      navigate("/");
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setError('The provided email address is not registered. Please sign up first.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current?.value;
    if (email) {
      // Call your password reset function here
      // Example: resetPassword(email);
    }
  };
  
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredentialPromise = signInWithPopup(auth, provider);
      const userCredential = await userCredentialPromise;
      const user = userCredential.user;
  
      // Check if the user exists in your database
  
  
      if (user) {
        // If the user exists, redirect to the main page
        navigate('/');
      } else {
        // If the user does not exist, alert the user and do not redirect
        console.log('User not found. Please sign up first.');
        // navigate('/SignUp');
      }
    } catch (error) {
      // Alert the user about the error
      alert('There was an error during Google login. Please try again.');
  
      // Navigate to signup page after the alert
      navigate('/SignUp');
    }
  };
  
  
  
  



  

  // const handleAppleLogin = async () => {
  //   try {
  //     const userCredential = await signInWithApple(auth);
  //     const user = userCredential.user;
  
  //     // Check if the user exists in your database
  //     const userExists = await checkIfUserExists(user.email);
  
  //     if (userExists) {
  //       // If the user exists, redirect to the main page
  //       navigate('/');
  //     } else {
  //       // If the user does not exist, alert the user and do not redirect
  //       console.log('User not found. Please sign up first.');
  //       // navigate('/SignUp');
  //     }
  //   } catch (error) {
  //     // Alert the user about the error
  //     alert('There was an error during Apple login. Please try again.');
  
  //     // Navigate to signup page after the alert
  //     navigate('/SignUp');
  //   }
  // };
  
 
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Log in with:</h2>
          <button type="button" className="social-btn google-btn" onClick={handleGoogleLogin}><img src="/assets/google_logo.png" alt="google" />  Google</button>
          <button type="button" className="social-btn apple-btn"><img src="/assets/apple_logo.png" alt="Apple" />   Apple</button>
          <p className="or-divider">
            <img src="/assets/line_scissor.png" alt="" className='line-scissor'/>
            Or
            <img src="/assets/line_scissor.png" alt="" className='line-scissor'/>
          </p>
          <div className="input-group">
            <label htmlFor="username">Email address or username</label>
            <input
              className="input-field"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
              placeholder='Email address or username'
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                ref={passwordRef}
                className="input-field"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Password'
                required
              />
              {showPassword ? (
                <Visibility className="eye-icon" onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityOff className="eye-icon" onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
          <Link to="/ForgottenPassword" className="forgot-password" onClick={forgotPasswordHandler}>Forgot your password?</Link>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">Log in</button>
          <p className="signup-link">Don’t have an account? <Link to="/SignUp"><span>Sign Up</span></Link></p>
          <p className='policy-text'>By signing in with an account, you agree to Sciccor's <a href="#d">Terms of Service</a>, <a href="#d">Privacy Policy</a>, and <a href="d#">Acceptable Use Policy</a>.</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;



