"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("boxes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      image:{
        type: Sequelize.STRING
      },
      discount:{
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      active:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      } ,    
      order:{
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("boxes");
  }
};
