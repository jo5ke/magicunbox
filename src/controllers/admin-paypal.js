const models = require("../../models/");
const Sequelize = require("sequelize");


module.exports = 
{
    async get(req,res)
    {
        var paypal = await models.paypal.findAll();
        res.render("admin-paypal",{ paypal });
    },

    async edit(req,res)
    {
        let id = parseInt(req.params.id);
        await models.paypal.update(req.body,{where:id});

    }
}