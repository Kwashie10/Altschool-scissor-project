import React, { FormEvent, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const ForgottenPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState<string | null>(null); // State to hold error message

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      setError((error as Error).message);  // Set error message state
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      {resetSent ? (
        <p>Reset email sent. Please check your inbox for further instructions.</p>
      ) : (
        <>
          <p>Please enter your email address below. We'll send you instructions on how to reset your password.</p>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="login-btn">Reset Password</button>
          </form>
          {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
        </>
      )}
      <p className="back-to-login">Remembered your password? <Link to="/Login">Login</Link></p>
    </div>
  );
};

export default ForgottenPassword;
