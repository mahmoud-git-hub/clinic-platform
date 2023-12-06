const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  medicalNotes: { type: String },
  // Add other patient-related fields as needed
});

module.exports = mongoose.model('Patient', patientSchema);
