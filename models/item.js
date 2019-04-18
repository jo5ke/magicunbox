"use strict";
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define(
    "item",
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      image: DataTypes.STRING,
      description : DataTypes.TEXT,
      winningChances: DataTypes.DOUBLE
    },
    {}
  );
  item.associate = function(models) {
    item.belongsToMany(models.user, {
      through: {
        model: models.inventory,
        unique: false
      }
    })
  };
  return item;
};
