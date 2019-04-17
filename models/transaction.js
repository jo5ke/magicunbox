'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    userId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    status: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    affiliateId: DataTypes.INTEGER
  }, {});
  transaction.associate = function(models) {
    // associations can be defined here
  };
  return transaction;
};