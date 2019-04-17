"use strict";
module.exports = (sequelize, DataTypes) => {
  var box = sequelize.define(
    "card",
    {
      code: DataTypes.STRING,
      value: DataTypes.DOUBLE,
      used:DataTypes.BOOLEAN,
    },
    {}
  );
  return box;
};
