
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Patient', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  };
  