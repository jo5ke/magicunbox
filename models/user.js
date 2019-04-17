"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      code: DataTypes.STRING,

      loginType: DataTypes.STRING,
      passwordResetCode: DataTypes.STRING,
      
      facebookID: DataTypes.STRING,
      twitterID: DataTypes.STRING,
      googleID: DataTypes.STRING,

      balance: DataTypes.DOUBLE,

      name: DataTypes.STRING,
      lastName: DataTypes.STRING, 

      address: DataTypes.STRING,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      building: DataTypes.STRING,
      apartment: DataTypes.STRING,
      phone: DataTypes.STRING,
      zip: DataTypes.STRING,
      region: DataTypes.STRING, 
      phoneNumber: DataTypes.STRING, 

      lastOnline: DataTypes.STRING,
      accessLevel: DataTypes.INTEGER,
      profileImage: DataTypes.STRING,
      promoter: DataTypes.INTEGER,
      
      topSize: DataTypes.STRING,
      bottomSize: DataTypes.STRING, 
      sneakerSize: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.belongsToMany(models.item, {
      through: {
        model: models.inventory,
        unique: false
      }
    })
  };
  return user;
};
