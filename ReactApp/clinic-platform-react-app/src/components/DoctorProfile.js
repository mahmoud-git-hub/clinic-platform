import React, { useState } from 'react';
import axios from 'axios';

const DoctorProfile = ({ match }) => {
  const [speciality, setSpeciality] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/doctor/${match.params.id}`, { speciality });
      // Example: Show a success message or redirect to the doctor profile page
    } catch (error) {
      console.error('Error updating doctor profile:', error.message);
      // Example: Show an error message to the user
    }
  };

  return (
    <div>
      <h2>Doctor Profile</h2>
      <label>Speciality: <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} /></label>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default DoctorProfile;
