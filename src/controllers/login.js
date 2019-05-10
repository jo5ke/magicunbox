const passport = require("passport");
const models = require("../../models");
const Sequelize = require('sequelize');

module.exports = {
  google:{
    get:passport.authenticate('google'),
    cb:{
      auth:passport.authenticate('google',{
        failureRedirect:"/#login",
        // failureFlash:"Email is associated with another account",
      }),
      get:(req,res)=>{
        res.redirect("/");
      }
    }
  },
  twitter:{
      get : passport.authenticate('twitter'),
      cb:{
          auth: passport.authenticate('twitter',{
            failureRedirect:'/#login',
            // failureFlash:"Email is associated with another account",
          }),
          get: (req,res)=>{
              res.redirect('/');
          }
      }
  },
  fb: {
    get: passport.authenticate("facebook"),
    cb: {
      auth: passport.authenticate("facebook", {
        scope: ["email"],
        authType: 'reauthenticate',
        failureRedirect: "/",
        // failureFlash:"Email is associated with another account",
      }),
      get: (req, res) => {
        res.redirect("/");
      }
    }
  },
  steam:{
    get:passport.authenticate('steam'),
    cb:{
      auth:passport.authenticate('steam',{
        failureRedirect:"/#login",
        // failureFlash:"Email is associated with another account",
      }),
      get:(req,res)=>{
        res.redirect("/");
      }
    }
  },
   standard: {
    auth: passport.authenticate("local",{
      failureRedirect: '/#login',
      // failureFlash: "Invalid username or password"
    }),
      post: async (req, res) => {
      backURL=req.header('Referer') || '/';
      res.redirect(backURL);
    }
  },checkVerification: {
      post: async (req, res) => {
      console.log(' ');
      console.log('email:'+req.body.email);
      console.log(' ');
      let user = await models.user.findOne({where:{email:req.body.email}});
      if(user.verified)
      {
        res.send({verified:true});
      }
      else
      {
        res.send({verified:false});
      }
    }
  }
};
