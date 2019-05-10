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
      console.log('****email:'+req.body.email);
      console.log(' ');
      let user = await models.user.findOne({where:{email:req.body.email}});
      console.log('****the result from database:'+user);
      var userStatus = 0;
      if(user)
      {
          if(user.verified)
        {
          userStatus=1; //user is verified
       //   res.send({status:1});
        }
        else
        {
          userStatus=2; //user is not verified
      //    res.send({status:2});
        }

      }
      //user does not exist
      res.send({userStatus:userStatus});


      
    }
  }
};
