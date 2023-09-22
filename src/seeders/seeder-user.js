'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
    // id:DataTypes.INTEGER,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleId: DataTypes.STRING,
    // phonenumber: DataTypes.STRING,
    // positionId: DataTypes.STRING,
    // image: DataTypes.STRING,
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        email: 'admin@gmail.com',
        password: '12345678',
        firstName: 'Mai',
        lastName: 'Duy',
        address: 'Ha Noi',
        gender: '1',
        roleId: '1',
        phonenumber: '0359093620',
        positionId: '',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };