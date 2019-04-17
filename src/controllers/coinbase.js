const models = require("../../models");

var coinbase = require('coinbase-commerce-node');
var Client = coinbase.Client;
var Charge = coinbase.resources.Charge;
var Webhook = require('coinbase-commerce-node').Webhook;

var client = Client.init('4a84a194-9410-49fc-a9f6-e9c4833f3bdd');

client.setRequestTimeout(3000);

module.exports = {
  async get(req, res) {
    console.log(req.query)
    let amount = req.query.amount
    let code = req.query.code //affiliate code usually null
    console.log('KOD ', code)
    let affiliate = null
    if(code) {
      affiliate = await models.user.findOne({where: {code: code}})
    }
    var chargeData = {
      'name': 'Balance',
      'description': 'This will increase your balance on magicunbox',
      'local_price': {
          'amount': amount.toString(),
          'currency': 'USD'
      },
      'pricing_type': 'fixed_price'
  
    }
    console.log(chargeData)
    Charge.create(chargeData, async function (error, response) {
      if(error === null) {
        let transaction = await models.transaction.create({
          userId: req.user.id,
          code: response.code,
          amount: amount,
          affiliateId: affiliate ? affiliate.id : null,
          status: 0
        })
        res.redirect(response.hosted_url)
      }else {
        return res.status(403).json({
          error: true,
          message: "Error"
        });
      }
    });
  },
  async post(request, response) {
    let event;
    try {
      event = Webhook.verifyEventBody(
        request.rawBody,
        request.headers['x-cc-webhook-signature'],
        'b45a0fb1-3c8c-4a5e-b470-7ca9a707e6f2'//secret
      );
      console.log("Success")
    } catch (error) {
      console.log('Error occured', error.message);
  
      return response.status(400).send('Webhook Error:' + error.message);
    }
  
    let transaction = await models.transaction.findOne({where: {
      code: event.data.code,
      status: 0
    }})
    if(transaction) {
      user = await models.user.findOne({
          where: {
            id: transaction.userId
          }
      });
      if(transaction.affiliateId) {
        await user.increment('balance', {by: transaction.amount*1.05})

        let affiliate = await models.user.findOne({ where: { id: transaction.affiliateId } });

        let total = await models.transaction.sum('amount', { where: { affiliateId: transaction.affiliateId, status: 1 } })

        let level = 1
        let levels = [2000, 5000, 7500, 10000, 20000, 40000, 60000, 80000, 100000]
        levels.forEach(levelAmount => {
          if(total > levelAmount) level++
        })

        await affiliate.increment('balance', {by: transaction.amount*level/100})
      }
      else {
        await user.increment('balance', {by: transaction.amount})
      }
      await transaction.update({status: 1})
    }
  
    response.status(200).send('Signed Webhook Received: ' + event.id);
  
  }
};
