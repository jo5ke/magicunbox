'use strict';
module.exports = (sequelize, DataTypes) => {
  const promoter = sequelize.define('promoter', {
    name: DataTypes.STRING,
    youtube: DataTypes.STRING,
    profileImage: DataTypes.STRING
  }, {});
  promoter.associate = function(models) {
    // associations can be defined here
  };
  return promoter;
};