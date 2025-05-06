const express = require('express');
const app = express();
const db = require('./models');
app.use(express.json());

// Import models
const { Doctor, Patient, Appointment } = db;

// Home route
app.get('/', (req, res) => {
  res.send('Hospital Management System Backend is Running');
});

// Create Doctor
app.post('/doctors', async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Doctors
app.get('/doctors', async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
});

// Create Patient
app.post('/patients', async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Patients
app.get('/patients', async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
});

// Book Appointment
app.post('/appointments', async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Appointments
app.get('/appointments', async (req, res) => {
  const appointments = await Appointment.findAll({
    include: [Doctor, Patient]
  });
  res.json(appointments);
});

// Start Server
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('✅ Server started on http://localhost:3000');
  });
});
