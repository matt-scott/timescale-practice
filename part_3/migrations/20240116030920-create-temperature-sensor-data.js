'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('temperature_sensor_data', {
      timestamp: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
      sensor_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      measurement_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      battery: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.DECIMAL(4,2)
      },
      linkquality: {
        type: Sequelize.INTEGER
      },
      power_outage_count: {
        type: Sequelize.INTEGER
      },
      pressure: {
        type: Sequelize.DECIMAL(4,2)
      },
      temperature: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2)
      },
      voltage: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('temperature_sensor_data');
  }
};