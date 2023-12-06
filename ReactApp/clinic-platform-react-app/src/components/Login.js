import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      const token = response.data.token;

      // Save the token in local storage or a secure storage mechanism

      // Redirect to the appropriate profile page based on user role
      // Example: if user is a doctor, redirect to /doctor/:id
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure (show error message, redirect, etc.)
    }
  };


  const navigate = useNavigate();
  const handleRegister = async () => {

    navigate('/resigter');

  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
