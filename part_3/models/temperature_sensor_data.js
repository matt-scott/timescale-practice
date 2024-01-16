'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temperature_sensor_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  temperature_sensor_data.init({
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sensor_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    measurement_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    battery: DataTypes.INTEGER,
    humidity: DataTypes.DECIMAL(4,2),
    linkquality: DataTypes.INTEGER,
    power_outage_count: DataTypes.INTEGER,
    pressure: DataTypes.DECIMAL(4,2),
    temperature: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    voltage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'temperature_sensor_data',
  });
  return temperature_sensor_data;
};