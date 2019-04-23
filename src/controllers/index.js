const models = require("../../models");

module.exports = {
  index: {
    async get(req, res) {
      let user = null
      if(req.user)
        user = await models.user.findOne({
          where: {
            id: req.user.id
          },
          include: [{
            model: models.item
          }]
        })
        boxes = await models.box.findAll({where: {active: true}, order: [ ['order', 'ASC'] ]})
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
        promoters = await models.promoter.findAll()
        registeredUsers = await models.user.count()
        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()
      return res.render("homepage", { user, boxes, drops, promoters, registeredUsers, dropsCount});
    }
  },
  profileSlug: {
    async get(req, res) {
        let username = req.params.username.toLowerCase().replace(/-/gi, " ");
        let profileUser = await models.user.findOne({
          where: {
            username: username
          }
        })
        if(!profileUser) res.redirect(req.header('Referer') || '/')

        let user = null
        if(req.user)
          user = await models.user.findOne({
            where: {
              id: req.user.id
            },
            include: [{
              model: models.item
            }]
          })

        let items = await models.inventory.findAll({
          where : {userId: profileUser.id},
          include: [{
            model: models.item
          }],
          order: [['createdAt', 'DESC']],
          limit:15
        })

        items = items.map(item => {
          return {
            name: item.item.name,
            image: '/img/items/' + item.item.image,
            price: item.item.price,
            description : item.description
          }
        })

        let drops = await models.inventory.findAll({
          include: [{
            model: models.item
          },{
            model:models.user
          }],
          order: [['createdAt', 'DESC']],
          limit: 20
        })
        registeredUsers = await models.user.count()
        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()
      return res.render("profileSlug", { user, items, drops, registeredUsers, dropsCount});
    }
  },

  profile: {
    async get(req, res) {
      let user = null
      if(req.user)
        user = await models.user.findOne({
          where: {
            id: req.user.id
          },
          include: [{
            model: models.item
          }]
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
        items = await models.inventory.findAll({
          where: {
            userId: req.user.id
          },
          include: [{
            model: models.item }]
          ,  attributes: ['id', 'sold', 'shippingStatus', 'trackingCode', 'updatedAt']
        })
        transactions = await models.transaction.findAll({where:{userId: req.user.id}})
        registeredUsers = await models.user.count()
        registeredUsers += 11352
        dropsCount = 21347 + await models.inventory.count()
        //affiliate
        let affiliate = await models.transaction.sum('amount', { where: { affiliateId:req.user.id, status: 1 } })
        let level = 1
        let left = 0
        let levels = [2000, 5000, 7500, 10000, 20000, 40000, 60000, 80000, 100000]
        levels.forEach(levelAmount => {
          if(affiliate > levelAmount) level++
          else if(left === 0) left = levelAmount - affiliate
        })
        //
      return res.render("profile", { user, boxes, drops, items, promoters, transactions, registeredUsers, dropsCount, affiliate: {
        sum: affiliate || 0,
        level: level,
        left: left,
        percentage: level
      } });
    }
  },

  legal: {
    async get(req, res) {
      let user = null
      if(req.user)
        user = await models.user.findOne({
          where: {
            id: req.user.id
          },
          include: [{
            model: models.item
          }]
        })
      registeredUsers = await models.user.count()
      registeredUsers += 11352
      dropsCount = 21347 + await models.inventory.count()

      return res.render("legal", { user, registeredUsers, dropsCount} );
    }
  },
  logout: (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    backURL=req.header('Referer') || '/';
    res.redirect(backURL);
  }
};
