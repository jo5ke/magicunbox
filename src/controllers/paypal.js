const models = require("../../models");
const paypal = require('paypal-rest-sdk');

//iamgboo
paypal.configure({
  'mode': 'live', //sandbox or live
  'client_id': 'ASbfeeukQD9nzTHBW8c3vM3b-oB4R_hoZvNXkHY2TnBVchKkvOxFg8ObUo0eb7owaUPLnprIHZ1OS5nS',
  'client_secret': 'ELyniw0mTOmO34k9AwGoUoD7Vi4dkpHV0jelueJDkGxRC2B84TIalw1W22z_K9_68VVtiqoS1YKoxipa'
});

//gunboxceo
/*
paypal.configure({
  'mode': 'live', //sandbox or live
  'client_id': 'ARMDPRu9L-cFYlqMvEtqv5EBsj3KB208FVICfkKS1lAyONz5sarXIXCG_wdpSctIKTrSpNdWLPVZzp7p',
  'client_secret': 'ENZfxb0eOlTA9tuVjPOAnPn3F9CFCXz4t4Yxyr5VtyHMjmHo2Gj19FxU2ZuZxLTPf2b1RVJSadAdw2XA'
});
/*
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AYtI3SJiBFWBekjxLKjOtKNVqHqb6hphV-BCip7qUo_KUiZQTth7M8dOKYYiGgZomR99hvyEHSGB5S3P',
  'client_secret': 'EHX8OrVKsD1EBQgwOiB1cw1Hy_2PHH27McG4EUAkGqBaF8LNTrUin37hpC6aoh_0luWGH1lCHdFbPRyn'
});
*/

module.exports = {
    pay: {
      get: async (req,res) => {
        let ban = await models.ban.findOne({ where: { userId: req.user.id} })
        if(ban) return res.redirect('/')

        let amount = req.query.amount
        let code = req.query.code
        let affiliate = null
        if(code) {
          affiliate = await models.user.findOne({where: {code: code}})
        }
        console.log(affiliate)
        var create_payment_json = {
          "intent": "sale",
          "payer": {
              "payment_method": "paypal"
          },
          "redirect_urls": {
              "return_url": "https://magicunbox.com/paypal/success",
              "cancel_url": "https://magicunbox.com"
          },
          "transactions": [{
              "item_list": {
                  "items": [{
                      "name": "Balance",
                      "sku": "Balance",
                      "price": "1.00",
                      "currency": "USD",
                      "quantity": amount
                  }]
              },
              "amount": {
                  "currency": "USD",
                  "total": amount.toString()
              },
              "description": "This is the payment description."
          }]
        };
        paypal.payment.create(create_payment_json, async function (error, payment) {
            if (error) {
                console.log("error")
                return res.status(403).json({
                  error: true,
                  message: "Error"
                });
            } else {
              console.log(payment)
              let transaction = await models.transaction.create({
                userId: req.user.id,
                code: payment.id,
                amount: amount,
                affiliateId: affiliate ? affiliate.id : null,
                status: 0
              })
              for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                  res.redirect(payment.links[i].href);
                }
              }
            }
        });

      }
    },
    success: {
      get: async (req, res) => {
      const payerId = req.query.PayerID;
      const paymentId = req.query.paymentId;
      console.log("redirected to success")

      let transaction = await models.transaction.findOne({where: {
        code: paymentId,
        status: 0
      }})
      const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": transaction.amount.toString()
            }
        }]
      };
    
      paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
        if (error) {
          console.log(error.response);
          throw error;
        } else {
          let transaction = await models.transaction.findOne({where: {
            code: payment.id,
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
            res.redirect('/');
        }
      });
    }
  },
  cancel: {
    get: (req, res) => {
      res.redirect('/')
    }
  }
};
