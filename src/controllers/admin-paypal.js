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
        console.log("body of paypal:"+req.body);
        console.log("Mode of paypal:"+req.body.mode);
        await models.paypal.update({mode:req.body.mode,clientId:req.body.clientId,secretId:req.body.secretId},{where:{id}});

    }
}