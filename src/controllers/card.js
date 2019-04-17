const models = require("../../models");
let fs = require('fs')

module.exports = {
    add : async (req,res)=>{
        // let omg = fs.readFileSync('./src/controllers/5', 'utf8')
        // let hehe = omg.split("\r\n")
        // let recursi = async (n)=>{
        //     if(hehe.length > n){
        //         await models.card.create({ code: hehe[n], value: 250, used: false })
        //         n = n+1
        //         console.log(n)
        //         recursi(n)
                
        //     }else{
        //         console.log('done')
        //     }
        // }
        // recursi(0)
        
    },
    redeem : async ( req,res )=>{
        try{
            let card = await models.card.findOne({where:{code:req.body.code}})
            if(card){
                if(card.dataValues.used === false){
                    await card.update({used:true})
                    let user = await models.user.findOne({where:{id : req.user.id}})
                    await user.increment('balance',{by:card.dataValues.value})
                    res.status(200).json('Sucessufuly redeeemed.')
                }else res.status(202).json('Already redeemed.')
            }else res.status(202).json('Invalid code!')
        }catch(err){
            console.log(err)
            res.status(500).json('Internal error.')
        }
    }
}