'use strict';

const { temperature_sensor_data } = require('../models');

const temps = [
  {
      timestamp: 1705299225000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705299225000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 24,
      voltage: 3115
  },
  {
      timestamp: 1705299225000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 19,
      voltage: 3115
  },
  {
      timestamp: 1705302825000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705302825000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 24,
      voltage: 3115
  },
  {
      timestamp: 1705302825000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 17,
      voltage: 3115
  },
  {
      timestamp: 1705306425000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705306425000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21,
      voltage: 3115
  },
  {
      timestamp: 1705306425000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 19,
      voltage: 3115
  },
  {
      timestamp: 1705310025000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705310025000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 22,
      voltage: 3115
  },
  {
      timestamp: 1705310025000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 20,
      voltage: 3115
  },
  {
      timestamp: 1705313625000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705313625000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21,
      voltage: 3115
  },
  {
      timestamp: 1705313625000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21,
      voltage: 3115
  },
  {
      timestamp: 1705317225000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705317225000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 20,
      voltage: 3115
  },
  {
      timestamp: 1705317225000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 22,
      voltage: 3115
  },
  {
      timestamp: 1705324425000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705324425000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705324425000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705320825000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705320825000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21,
      voltage: 3115
  },
  {
      timestamp: 1705320825000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 19,
      voltage: 3115
  },
  {
      timestamp: 1705328025000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705328025000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 22,
      voltage: 3115
  },
  {
      timestamp: 1705328025000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 18,
      voltage: 3115
  },
  {
      timestamp: 1705331625000,
      sensor_location: 'family',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 21.51,
      voltage: 3115
  },
  {
      timestamp: 1705331625000,
      sensor_location: 'dining',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 23,
      voltage: 3115
  },
  {
      timestamp: 1705331625000,
      sensor_location: 'bedroom',
      measurement_type: 'temperature',
      battery: 100,
      humidity: 34.48,
      linkquality: 255,
      power_outage_count: 9,
      pressure: 983.2,
      temperature: 17,
      voltage: 3115
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    try {
      await temperature_sensor_data.bulkCreate(temps, { validate: true });
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete specific entries
    // await queryInterface.bulkDelete('temperature_sensor_data', {
    //   timestamp: temps.map(element => element.timestamp)
    // });

    // Mass delete
    return queryInterface.bulkDelete('temperature_sensor_data', null, {});
  }
};
