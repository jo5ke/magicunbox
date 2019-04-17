"use strict";
module.exports = (sequelize, DataTypes) => {
  var box = sequelize.define(
    "box",
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      image:DataTypes.STRING,
      discount: DataTypes.DOUBLE,
      active: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER
    },
    {}
  );
  box.associate = function(models) {
    box.hasMany(models.boxitem);
  };
  return box;
};
