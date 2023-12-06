import React, { useState } from 'react';
import axios from 'axios';

const PatientProfile = ({ match }) => {
  const [medicalNotes, setMedicalNotes] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/patient/${match.params.id}`, { medicalNotes });
      // Example: Show a success message or redirect to the patient profile page
    } catch (error) {
      console.error('Error updating patient profile:', error.message);
      // Example: Show an error message to the user
    }
  };

  return (
    <div>
      <h2>Patient Profile</h2>
      <label>Medical Notes: <input type="text" value={medicalNotes} onChange={(e) => setMedicalNotes(e.target.value)} /></label>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default PatientProfile;
