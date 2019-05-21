const models = require("../../models");
const Sequelize = require("sequelize");
const ne = Sequelize.ne;
module.exports = {
  async get(req, res) {
    let boxes = await models.box.findAll();
    boxes = boxes.map(item => {
      return {
        box: {
          name: item.dataValues.name,
          price: item.dataValues.price,
          salesPrice: item.dataValues.salesPrice,
          salesDuration:item.dataValues.salesDuration,
          id: item.id,
          active: item.active
        }
      };
    });
    let user = await models.user.findOne({
      where: {
          id: req.user.id
      }
    });
    registeredUsers = await models.user.count()
    registeredUsers += 11352
    dropsCount = 21347 + await models.inventory.count()
    res.render("admin", { boxes, user, registeredUsers, dropsCount});
  },
  box: {
    get: async (req, res) => {
      let name = req.params.name.toLowerCase().replace(/-/gi, " ");
      
      let boxitems = await models.box.findOne({
        where: { name },
        include: [{ model: models.boxitem, include: [{model: models.item}]}],
        order: [[models.boxitem, models.item, 'price', 'desc']]        
      });
      // boxitems.boxitems.sort(function(a, b) {
      //   return a.price - b.price;
      // });

      if(!boxitems){
        res.redirect('/admin/');
        return;
      }
      if (boxitems === null) res.redirect("/");
      let items = [];
      boxitems.boxitems.forEach(boxitem => {
        items.push(boxitem.item);
      });

      items = items.map(item => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          image: "/img/items/" + item.image,
          weight: item.weight,
          weightr: item.weightr
        };
      });
  
      let allItems = await models.item.findAll();
      allItems = allItems.map(item => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          image: "/img/items/" + item.image,
        };
      });
      let user = await models.user.findOne({
          where: {
              id: req.user.id
          }
      });
      registeredUsers = await models.user.count()
      registeredUsers += 11352
      dropsCount = 21347 + await models.inventory.count()

      res.render("admin-box", { allItems, boxitems, items, user, registeredUsers, dropsCount });
    },
    update: async (req, res) => {
      let id = parseInt(req.params.id);
      let data = req.body.data;

      if (id && data) {
        data.forEach(async item => {
          await models.boxitem.update(
            { 
              weight: item.value,
              weightr: item.valuer
             },
            { where: { boxId: id, itemId: parseInt(item.id) } }
          );
        });
        res.status(200).json({
          error: false,
          data: null,
          message: "Successfull update"
        });
      } else {
        res.status(400).json({
          error: true,
          data: null,
          message: "Invalid data"
        });
      }
    },
    updateBox: async(req,res)=>{
      let boxId = req.body.boxId;
      let name = req.body.name;
      let price = req.body.price;
      let salesDuration = req.body.salesDuration;
      let promotionEnd = new Date(Date.now() +salesDuration*24*3600*1000);
      console.log("promotionEnd:"+promotionEnd);
      console.log("promotion end string:"+promotionEnd.toString());
      let result = await models.box.update({
        name,
        price,
        salesPrice:req.body.salesPrice,
        salesDuration:req.body.salesDuration,
        promotionEnd:promotionEnd
      },{
        where:{
          id:boxId
        }
      });
      res.status(200).json({
        error: false,
        data: null,
        message: "Updated successfully"
      });
    },
    active: async (req, res) => {
      let id = req.params.id;
      let status = req.body.status;
      
      if (id && status !== undefined && (typeof status === "boolean")) {
        await models.box.update({ active: status }, { where: { id: parseInt(id) } });
        res.status(200).json({
          error: false,
          data: null,
          message: "Successfull update"
        });
      } else {
        res.status(400).json({
          error: true,
          data: null,
          message: "Invalid data"
        });
      }
    }
  },
  item: {
    add: async (req, res) => {
      let boxId = parseInt(req.body.boxID);
      let itemId = parseInt(req.body.itemID);
      let result = await models.boxitem.create({
        boxId,itemId,weight:1,weightr:1
      })
      if(result){
        res.status(200).json({
          error:false,
          data: null,
          message: "Deleted"
        })
      }else{
        res.status(400).json({
          error:true,
          data: JSON.stringify(result),
          message: "We have problems"
        })
      }
    },
    delete: async (req, res) => {
      let boxId = parseInt(req.body.boxID);
      let itemId = parseInt(req.body.itemID);

      let result = await models.boxitem.destroy({where:{boxId,itemId}});
      if(result){
        res.status(200).json({
          error:false,
          data: null,
          message: "Deleted"
        })
      }else{
        res.status(400).json({
          error:true,
          data: JSON.stringify(result),
          message: "We have problems"
        })
      }

    }
  }
};
