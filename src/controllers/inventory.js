const models = require("../../models");

module.exports = {
  sellItem: {
    async post(req, res) {
      let item = await models.inventory.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        },
        include: [{
          model: models.item
        }],
      });
      if(item) {
        if(item.sold) {
          return res.status(403).json({
            error: true,
            message: "The item is already sold"
          });
        }
        await models.inventory.update(
          { sold: true},
          { where: { id: req.params.id } }
        );
        let user = await models.user.findOne({
          where: {
            id: req.user.id
          }
        })
        await user.increment('balance', {by: item.item.price})
        res.redirect('/profile#items')
      } else {
        return res.status(403).json({
          error: true,
          message: "The item does not belong to you"
        });
      }
    }
  },
  shipItem: {
    async post(req, res) {
      let user = await models.user.findOne({
        where: {
          id: req.user.id
        }
      });
      let item = await models.inventory.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        },
        include: [{
          model: models.item
        }],
      });
      if(item) {
        if(item.sold) {
          return res.status(403).json({
            error: true,
            message: "The item is already sold"
          });
        } else if(item.shippingStatus > 0) {
          return res.status(403).json({
            error: true,
            message: "The item is already in shipping process"
          });
        } else if (
            !user.name ||
            !user.lastName ||
            !user.phoneNumber ||

            !user.country ||
            !user.address ||
            !user.region ||

            !user.city ||
            !user.zip ||

            !user.topSize ||
            !user.bottomSize ||
            !user.sneakerSize
          ) {
            req.flash('error','Please fill out all shipping information')
            res.redirect('/profile#general')
        } else {
          await models.inventory.update(
            { shippingStatus: 1 },
            { where: { id: req.params.id } }
          );
          res.redirect('/profile#items#won')
        }
      } else {
        return res.status(403).json({
          error: true,
          message: "The item does not belong to you"
        });
      }
    }
  }
};
