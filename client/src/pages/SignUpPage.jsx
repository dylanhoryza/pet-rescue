import React from 'react';
import { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';
import { createUser } from '../utils/api';
import '../styles/signup.css'

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') { // Handle role select change
      setRole(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Create user data object
    const userData = {
      username: userName,
      email: email,
      password: password,
      roles: role // Make sure to set the role based on user selection
    };

    try {
      // Call the createUser function with user data
      const response = await createUser(userData);

      if (response.ok) {
        // User creation successful
        // Redirect user to profile route or perform any other action
        alert('user created')
        setEmail('');
        setPassword('');
        setUserName('');
        setRole('');
      } else {
        // User creation failed
        // Handle error or display error message
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
      <h1 className='signup-header'>Signup</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          
          placeholder="Your username"
        />
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
        <select name="role" value={role} onChange={handleInputChange}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="foster">Foster</option>
          </select>
        
        <button className='contact-submit-btn' type="submit">Submit</button>
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