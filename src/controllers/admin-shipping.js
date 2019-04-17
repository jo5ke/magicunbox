const models = require("../../models");
const Sequelize = require("sequelize");
const ne = Sequelize.ne;

const sendEmail = require('../../utils/sendEmail');

module.exports = {
    get: async (req,res)=>{
        let offset = req.query.offset || 0;
        let limit = req.query.limit || 50;
        let type = String(req.query.type).toLowerCase() || 'requested';

        offset = parseInt(offset);
        limit = parseInt(limit);
        if(type !== 'requested' && type !== 'shipped'){
            type = 'requested';
        }

        let orders = await models.inventory.findAll({
            where: {
                shippingStatus: type==='requested'?1:2
            },
            limit,
            offset,
            include:[
                {model: models.user},
                {model: models.item}
            ],
            order: [
                ['updatedAt', 'DESC'],
                ['id', 'ASC'],
            ],
        });

        let users={};
        orders = orders.map( order=>{
            users[order.user.id] = order.user;

            let orderInfo = {
                id: order.id,
                user: order.user.username,
                item: order.item.name,
                price: order.item.price,
                status: String(type).toUpperCase(),
                code: order.trackingCode,
                createdAt: order.createdAt
            }
            return orderInfo;
        })
        let user = await models.user.findOne({
            where: {
                id: req.user.id
            }
        });

        registeredUsers = await models.user.count()
        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()

        let orderCount = 0;
        let userCount = {};
        let moneyCount = 0;
        let last24h = await models.inventory.findAll({
            where:{
                updatedAt:{
                    $gte: new Date(Date.now()-24*3600*1000)
                },
                shippingStatus:{
                    $eq : type==='requested'?1:2
                }
            },
            include:[{model: models.item}]
        });
        
        last24h.forEach(order=>{
                orderCount++;
                userCount[order.userId]= 1;
                moneyCount+= order.item.price;
            })
        
        userCount = await Object.keys(userCount).length;

        let prevOffset = offset-limit>0?offset-limit:0;
        let prev = `/admin/shipping?limit=${limit}&offset=${prevOffset}&type=${type}`;
        let next = `/admin/shipping?limit=${limit}&offset=${offset+limit}&type=${type}`;
        
        res.render('admin-shipping', {render:orders, prev, next, user, users, registeredUsers, dropsCount, orderCount,userCount,moneyCount});        
    },
    post: async (req,res)=>{
        let data = req.body;
        if(data && data.id && data.status && data.code){
            let result = await models.inventory.update(
                {
                    shippingStatus: parseInt(data.status),
                    trackingCode: data.code
                },    
                {where:{id:parseInt(data.id)}}
            )
            res.redirect('/admin/shipping');
        }else{
            res.status(400).json({
                error: true,
                data: null,
                message: "Invalid data "+JSON.stringify(req.body)
            })
        }
    },
    email:{
        post:async (req,res)=>{
            let from = req.body.from;
            let subject = req.body.subject;
            let email = req.body.email;
            let text = req.body.text;
            
            let OK = true;
            let fields = [
                'Sender email is missing',
                'Subject is missing',
                'Receiver email is missing',
                'Text is missing'
            ]
            let error = [];
            await [from,subject,email,text].forEach((field,index)=>{
                if(field===undefined || field==="") {
                    OK = false;
                    error.push(fields[index]);
                }
            });
            if(OK){
                let response = await sendEmail(from,email,subject,text);
                res.status(200).json({
                    error: false,
                    data: null,
                    message: "Email sent"
                });
            }else{
                res.status(200).json({
                    error: true,
                    data: JSON.stringify(error),
                    message: "All fields must be enterd!"
                });
            }
        }
    }
}