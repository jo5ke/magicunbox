'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    code: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    used: DataTypes.BOOLEAN
  }, {});
  cards.associate = function(models) {
    // associations can be defined here
  };
  return cards;
};