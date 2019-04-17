const models = require("../../models");

module.exports = {

    async post(req, res) {
      user = await models.user.findOne({
          where: {
            id: req.user.id
          }
      });
      await user.update({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        address: req.body.address,
        region: req.body.region,
        city: req.body.city,
        zip: req.body.zip,
        building: req.body.building,
        apartment: req.body.apartment,
        topSize: req.body.topSize,
        bottomSize: req.body.bottomSize,
        sneakerSize: req.body.sneakerSize
      })
      return res.redirect('/profile')
    },
    async put(req, res) {
      let userWithSameCode = await models.user.findOne({ where: { code: req.body.code } })
      if(userWithSameCode) {
        req.flash('error','That affiliate code is already taken')
        return res.redirect('/profile#affiliate')
      }
      user = await models.user.findOne({
          where: {
            id: req.user.id
          }
      });
      await user.update({
        code: req.body.code
      })
      return res.redirect('/profile#affiliate')
    }
};
