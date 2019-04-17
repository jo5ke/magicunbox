"use strict";
module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define(
    "inventory",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER
      },
      itemId: {
        type: DataTypes.INTEGER
      },
      sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      shippingStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      trackingCode: {
        type: DataTypes.STRING,
        defaultValue: '#'
      }
    },
    {
      freezeTableName: true
    }
  );
  inventory.associate = function(models) {
    // associations can be defined here
    inventory.belongsTo(models.user)
    inventory.belongsTo(models.item)
  };
  return inventory;
};
