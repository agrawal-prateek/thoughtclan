'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      host_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighbourhood_group: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighbourhood:{
        type: Sequelize.STRING,
        allowNull: false
      },
      latitude:{
        type:Sequelize.DOUBLE,
        allowNull: false
      },
      longitude:{
        type:Sequelize.DOUBLE,
        allowNull: false
      },
      room_type:{
        type:Sequelize.STRING,
        allowNull:false
      },
      price:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel');
  }
};
