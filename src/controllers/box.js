const models = require("../../models");

module.exports = {
  slug: {
    get: async (req, res) => {
      let name = req.params.name.toLowerCase().replace(/-/gi, " ");
      let box = await models.box.findOne({
        where: { name: name, active: true},
        include: [{ 
          model: models.boxitem, 
            include: [{ 
                model: models.item 
            }]
        }],
        order: [[models.boxitem, models.item, 'price', 'desc']]
      });
      if (box === null) res.redirect("/");
      let items = [];
      box.boxitems.forEach(boxitem => {
        items.push(boxitem.item);
      });
      box = {id:box.id,name:box.name,price:box.price, image: box.image, promotionEnd:box.promotionEnd ,salesPrice:box.salesPrice};
      items = items.map(item=>{console.log(item)
        return{
          id: item.id,
          name: item.name,
          price: item.price,
          winChances: item.winningChances,
          image: '/img/items/'+item.image,
          description: item.description
        }
      })
      

      drops = await models.inventory.findAll({
        include: [{
          model: models.item
        },{
          model:models.user
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: 20
      })

      let user = null
      if(req.user) 
        user = await models.user.findOne({
          where: {
            id: req.user.id
          }
        })

      registeredUsers = await models.user.count()
      registeredUsers += 11352

      dropsCount = 21347 + await models.inventory.count()
      
      let = testSpin = false;
      if(user) {
        if(user.balance > 0) {
          testSpin = true;
        }
      }

      
      if(box.promotionEnd)
      {
        var currentTimeMils = new Date(Date.now()).getTime();
        var promotionMils = new Date(box.promotionEnd.toString()).getTime();
        if(currentTimeMils < promotionMils)
        {
          box.onPromotion = true;
        }
        else
        {
          box.onPromotion = false;
        }

      }
      else
      {
          box.onPromotion = false;
      }
      

      res.render("box", {dropsCount, box, items , drops, user, registeredUsers, testSpin});
    }
  },
  open: {
    async get(req, res) {
      let boxId = req.params.id;
      if(req.user.promoter)
        box = await models.box.findOne({
          where: {
            id: boxId,
            active: true
          },
          include: [
            {
              model: models.boxitem,
              attributes:['id','boxId', 'itemId',['weightr', 'weight']],
              include: [
                {
                  model: models.item
                }
              ]
            }
          ]
        });
      else
        box = await models.box.findOne({
          where: {
            id: boxId,
            active: true
          },
          include: [
            {
              model: models.boxitem,
              include: [
                {
                  model: models.item
                }
              ]
            }
          ]
        });

      if (!box) {
        return res.status(404).json({
          error: true,
          data: null,
          message: "Box not found"
        });
      } 

      let user = await models.user.findOne({
        where: {
          id: req.user.id
        }
      });
      var onPromotion = false;
      if(box.promotionEnd)
      {
          var currentTimeMils = new Date(Date.now()).getTime();
          var promotionEndMils = new Date(box.promotionEnd.toString()).getTime();
          if(currentTimeMils < promotionEndMils)
          {
              onPromotion = true;
              if(user.balance < box.salesPrice)
              {
                  return res.status(403).json(
                    {
                      error:true,
                      data:null,
                      message:"Not enough money"

                    }
                  );
              }
             
          }

      }
      if (!onPromotion && user.balance < box.price) 
      {
        return res.status(403).json({
          error: true,
          data: null,
          message: "Not enough money"
        });
      
      }
       else 
       {
         var boxPrice;
        if(!onPromotion)
        { 
          await user.decrement("balance", { by: box.price });
          boxPrice = box.price;
        }
        else
        {
          await user.decrement("balance", { by: box.salesPrice });
          boxPrice = box.salesPrice;
        }
        
        let weightSum = 0;
        box.boxitems.sort((a, b) => a.weight - b.weight);
        let previousBoxItem = null;
        box.boxitems.forEach(boxItem => {
          weightSum += boxItem.weight;
          if (previousBoxItem) boxItem.weight += previousBoxItem.weight;
          previousBoxItem = boxItem;
        });
        let roll = Math.random() * weightSum;
        let result = null;
        let i;
        for (i = 0; i < box.boxitems.length; i++) {
          if (roll < box.boxitems[i].weight) {
            result = box.boxitems[i];
            break;
          }
        }
        let drop = await models.inventory.create({
          userId: req.user.id,
          itemId: result.id,
        }, {
          attributes: ['id', 'sold', 'shippingStatus', 'updatedAt']
        });

        var io = require("../../index")
        setTimeout(
          () => {
            io.sockets.emit('drop', {
            username: req.user.username,
            image: result.item.image
            })
          }, 
          13000)

        return res.status(200).json({
          error: false,
          data: {
            item: result.item,
            dropId: drop.id,
            boxPrice: boxPrice
          },
          message: "successfull retrieval"
        });
      }
    }
  },

  test: {
    async get(req, res) {
      let boxId = req.params.id;
      // if(req.user.promoter)
        box = await models.box.findOne({
          where: {
            id: boxId,
            active: true
          },
          include: [
            {
              model: models.boxitem,
              attributes:['id','boxId', 'itemId',['weightr', 'weight']],
              include: [
                {
                  model: models.item
                }
              ]
            }
          ]
        });
      // else
      //   box = await models.box.findOne({
      //     where: {
      //       id: boxId,
      //       active: true
      //     },
      //     include: [
      //       {
      //         model: models.boxitem,
      //         include: [
      //           {
      //             model: models.item
      //           }
      //         ]
      //       }
      //     ]
      //   });

      if (!box) {
        return res.status(404).json({
          error: true,
          data: null,
          message: "Box not found"
        });
      } 

      let user = await models.user.findOne({
        where: {
          id: req.user.id
        }
      });

      if (user.balance > 0) {
        return res.status(403).json({
          error: true,
          data: null,
          message: "You've got money for real spin"
        });
      } else {

        let weightSum = 0;
        box.boxitems.sort((a, b) => a.weight - b.weight);
        let previousBoxItem = null;
        box.boxitems.forEach(boxItem => {
          weightSum += boxItem.weight;
          if (previousBoxItem) boxItem.weight += previousBoxItem.weight;
          previousBoxItem = boxItem;
        });
        let roll = Math.random() * weightSum;
        let result = null;
        let i;
        for (i = 0; i < box.boxitems.length; i++) {
          if (roll < box.boxitems[i].weight) {
            result = box.boxitems[i];
            break;
          }
        }
        // let drop = await models.inventory.create({
        //   userId: req.user.id,
        //   itemId: result.id,
        // }, {
        //   attributes: ['id', 'sold', 'shippingStatus', 'updatedAt']
        // });

        // var io = require("../../index")
        // setTimeout(
        //   () => {
        //     io.sockets.emit('drop', {
        //     username: req.user.username,
        //     image: result.item.image
        //     })
        //   }, 
        //   13000)

        return res.status(200).json({
          error: false,
          data: {
            item: result.item,
            // dropId: drop.id,
            boxPrice: box.price
          },
          message: "successfull retrieval"
        });
      }
    }
  }


};
