
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Appointment', {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  };
  