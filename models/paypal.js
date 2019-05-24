"use strict"
module.exports = (sequelize, DataTypes) => 
{
    const payPal = sequelize.define(
        "paypal",

        {
            mode : DataTypes.STRING,
            clientId : DataTypes.STRING,
            secretId : DataTypes.STRING
        } ,
        {
            freezeTableName: true
        }
    );

    return payPal;

}