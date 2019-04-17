"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true
      },
      loginType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      facebookID: {
        type: Sequelize.STRING,
        allowNull: true
      },
      twitterID: {
        type: Sequelize.STRING,
        allowNull: true
      },
      googleID: {
        type: Sequelize.STRING,
        allowNull: true
      },
      balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      building: {
        type: Sequelize.STRING,
        allowNull: true
      },
      apartment: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: true
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastOnline: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Date.now().toString()
      },
      accessLevel: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      promoter:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      profileImage: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "/img/defaultUser.png"
      },
      topSize: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bottomSize: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sneakerSize: {
        type: Sequelize.STRING,
        allowNull: true
      },
      passwordResetCode:{
          type: Sequelize.STRING,
          allowNull: true
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
    return queryInterface.dropTable("users");
  }
};
