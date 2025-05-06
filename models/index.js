const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('hms', 'root', '#Backspace@6', {
  host: 'localhost',
  dialect: 'mysql'
});

// Import models
const Doctor = require('./Doctor')(sequelize, DataTypes);
const Patient = require('./Patient')(sequelize, DataTypes);
const Appointment = require('./Appointment')(sequelize, DataTypes);

// Define relationships
Doctor.hasMany(Appointment);
Patient.hasMany(Appointment);
Appointment.belongsTo(Doctor);
Appointment.belongsTo(Patient);

// Export all models and sequelize
module.exports = {
  sequelize,
  Doctor,
  Patient,
  Appointment
};
