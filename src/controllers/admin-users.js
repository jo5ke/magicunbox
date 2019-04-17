const models = require("../../models");
const Sequelize = require("sequelize");
const ne = Sequelize.ne;
module.exports = {
    get: async (req,res)=>{
        let limit = parseInt(req.query.limit) || 50;
        let offset = parseInt(req.query.offset) || 0;
        let search = req.query.search || '';
        let users;
        if(search){
            users = await models.user.findAll({where:{username:{$like:"%"+search+"%"}}, limit,offset });
            users =  users.map(user =>({
                id: user.id,
                name: user.username,
                balance: user.balance,
                accessLevel: user.accessLevel,
                promoter: user.promoter,
                profileImage: user.profileImage
            }))
        }else{
            users = await models.user.findAll({ limit, offset });
            users =  users.map(user =>({
                id: user.id,
                name: user.username,
                balance: user.balance,
                accessLevel: user.accessLevel,
                promoter: user.promoter,
                profileImage: user.profileImage
            }))
        }
        let user = await models.user.findOne({
            where: {
                id: req.user.id
            }
        });
        registeredUsers = await models.user.count()

        search = search?'&search='+search:'';
        let prev = offset-limit>0?offset-limit:0;
        let next = offset+limit<registeredUsers?offset+limit:registeredUsers-limit;
        let prevLink = `/admin/users?offset=${prev}&limit=${limit}${search}`;
        let nextLink = `/admin/users?offset=${next}&limit=${limit}${search}`;

        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()        

        res.render('admin-users',{users, user, registeredUsers, dropsCount,prevLink,nextLink});
    },
    post: async (req,res)=>{
        let data = req.body;
        Object.keys(data).forEach(key=> data[key] = parseInt(data[key]))
        if(data && 
            data.id !== undefined &&
            data.balance !== undefined &&
            data.accessLevel !== undefined &&
            data.promoter !== undefined){
            let oldUser = await models.user.findOne({where:{id:+data.id}});
            if(oldUser){
                let query = {}
                if(oldUser.balance !== data.balance) {
                    query.balance = data.balance;
                }
                if(oldUser.accessLevel !== data.accessLevel){
                    query.accessLevel = data.accessLevel
                }
                if(oldUser.promoter !== data.promoter){
                    query.promoter = data.promoter
                }
                let result = await models.user.update(
                    query,
                    {
                        where:{
                            id: data.id
                    }
                });
                res.redirect("/admin/users");
            }else{
                res.status(404).json({
                    error: true,
                    data: null,
                    message: "User not found"
                });
            }
        }else{
            res.status(400).json({
                error: true,
                data: null,
                message: "Invalid data"
            });
        } 
    },
}