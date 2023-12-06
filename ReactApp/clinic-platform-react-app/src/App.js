import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PatientProfile from './components/PatientProfile';
import DoctorProfile from './components/DoctorProfile';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/patient/:id" Component={PatientProfile} />
        <Route path="/doctor/:id" Component={DoctorProfile} />
      </Routes>
    </Router>
  );
}

export default App;
