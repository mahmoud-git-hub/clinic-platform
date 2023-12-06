const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const Doctor = require('../models/Doctor');

// Get Doctor Profile
router.get('/:id', authenticateUser, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.params.id }).populate('userId', 'email');
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Update Doctor Profile
router.put('/:id', authenticateUser, async (req, res) => {
  try {
    const { speciality } = req.body;

    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.params.id },
      { $set: { speciality } },
      { new: true }
    );

    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
