'use strict';
module.exports = (sequelize, DataTypes) => {
  const ban = sequelize.define('ban', {
    userId: DataTypes.INTEGER
  }, {});
  ban.associate = function(models) {
    // associations can be defined here
  };
  return ban;
};