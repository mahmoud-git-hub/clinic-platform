const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const Patient = require('../models/Patient');
const nodemailer = require('nodemailer');

// Get Patient Profile
router.get('/:id', authenticateUser, async (req, res) => {
  try {
    const patient = await Patient.findOne({ userId: req.params.id }).populate('userId', 'email');
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    res.json(patient);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Update Patient Profile
router.put('/:id', authenticateUser, async (req, res) => {
  try {
    const { medicalNotes } = req.body;

    const patient = await Patient.findOneAndUpdate(
      { userId: req.params.id },
      { $set: { medicalNotes } },
      { new: true }
    );

    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    // Example: Send email notification
    sendEmailNotification(req.user.email, 'Profile Updated', 'Your medical profile has been updated.');

    res.json(patient);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Example: Email Notification Service
function sendEmailNotification(email, subject, message) {

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Specify your email service provider
    auth: {
      user: 'process.env.EMAIL_USER', // Your email address
      pass: 'process.env.EMAIL_PASSWORD' // Your email password (use an application-specific password for security)
    }
  });

  // Setup email data with unicode symbols
  const mailOptions = {
    from: 'process.env.EMAIL_USER', // Sender address
    to: email, // List of recipients
    subject: subject, // Subject line
    text: message // Plain text body
    // You can also use 'html' property for HTML formatted emails
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
  });

}

module.exports = router;
