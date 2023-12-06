import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegsiter = async () => {
        try {
          const response = await axios.post('http://localhost:3001/register', { email, password, role });
          const token = response.data.token;
    
          // Save the token in local storage or a secure storage mechanism
    
          // Redirect to the appropriate profile page based on user role
          // Example: if user is a doctor, redirect to /doctor/:id
        } catch (error) {
          console.error('Login failed:', error.message);
          // Handle login failure (show error message, redirect, etc.)
        }
      };

    return (
        <div>
          <h2>Register</h2>
          <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
          <label>Role: <input type="text" value={role} onChange={(e) => setRole(e.target.value)}/></label>
          <button onClick={handleRegsiter}>Register</button>
        </div>
      );
};

export default Register;