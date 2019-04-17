'use strict';
module.exports = (sequelize, DataTypes) => {
  const deposit = sequelize.define('deposit', {
    userId: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    paid: DataTypes.BOOLEAN
  }, {});
  deposit.associate = function(models) {
    // associations can be defined here
  };
  return deposit;
};