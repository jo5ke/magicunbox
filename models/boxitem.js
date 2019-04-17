"use strict";
module.exports = (sequelize, DataTypes) => {
  const boxitem = sequelize.define(
    "boxitem",
    {
      boxId: {
        type: DataTypes.INTEGER
      },
      itemId: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      },
      weightr: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  boxitem.associate = function(models) {
    // associations can be defined here
    boxitem.belongsTo(models.item);
  };
  return boxitem;
};
