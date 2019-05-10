const models = require("../../models");
const Sequelize = require('sequelize');


module.exports = {

    async get(req,res)
    {
        res.send("verification route");
    },
    token:
    {
        async get(req,res)
        {
           // res.send(req.params.token);
            let token= req.params.token;
            console.log('token:'+token);
            let user = await models.user.findOne({where:{emailToken:token}});
            console.log('User:'+user.id);
            if(user)
            {
                
                await models.user.update({verified:true},{where:{id:user.id}}).then((res)=>{
                    console.log('User updated'+res);
                }).catch((err)=> {
                    console.log('User is not updated:'+err);
                })
                
            }
            res.redirect('/');
        }
    }

    


};