import React from 'react';
import { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';
import { loginUser } from '../utils/api';
import '../styles/signup.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await loginUser(userData);

      if (response.ok) {
        // Login successful
        // Redirect user or perform any other action
        alert('Login successful');
        setEmail('');
        setPassword('');
      } else {
        // Login failed
        const errorMessage = await response.json();
        setErrorMessage(errorMessage.error); // Assuming backend sends error message in response
      }
    } catch (error) {
      // Error occurred during fetch request
      console.error('Error:', error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="signup-container-2">
      <div className="container text-center signup-container">
        <h1 className="signup-header">Login</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your Email"
          />
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className="contact-submit-btn" type="submit">
            Login
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}