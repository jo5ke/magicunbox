const models = require("../../models");
const Sequelize = require("sequelize");

module.exports = {
    async get(req, res) {
        let items = await models.item.findAll();
        items = items.map(item=>item.dataValues)
        let user = await models.user.findOne({
          where: {
              id: req.user.id
          }
        });
        res.render("admin-items", {user,items});
    },
    async edit(req,res){
      let id = parseInt(req.params.id);
      await models.item.update(req.body,{where:{id}})
    }
}