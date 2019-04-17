const models = require("../../models");
const Sequelize = require("sequelize");
const ne = Sequelize.ne;
module.exports = {
    get: async (req,res)=>{
        let promoters = await models.promoter.findAll();
        promoters=  promoters.map(prom =>({
            id: prom.id,
            name: prom.name,
            URL: prom.youtube,
            profileImage: prom.profileImage
        }))
        let user = await models.user.findOne({
            where: {
                id: req.user.id
            }
        });
        registeredUsers = await models.user.count()
        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()
        res.render('admin-promoters',{promoters, user, registeredUsers, dropsCount});
    },
    post: async (req,res)=>{
        let data = req.body;
        if(data.name && data.chanel && data.image){
            let result = await models.promoter.create({
                name: data.name,
                youtube: data.chanel,
                profileImage: data.image
            });
        } 
        res.redirect("/admin/promoters");
    },
    delete: async (req,res)=>{
        let id = req.body.id;

        if(id && typeof id === "number"){
            let result = await models.promoter.destroy({
                where: {id}
            });
            res.status(200).json({
                error: false,
                data: null,
                message: "Deleted"
            });
        }else{
            res.status(400).json({
                error: true,
                data: null,
                message: "Inavlid data"
            });
        }
    }
}