
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Doctor', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false
      },
      availableDates: {
        type: DataTypes.JSON,
        allowNull: false
      }
    });
  };
  