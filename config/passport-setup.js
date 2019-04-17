const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const TwitterStrategy = require("passport-twitter");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require("passport-local").Strategy;
const SteamStrategy = require("passport-steam").Strategy;
const models = require("../models");
const bcryptjs = require("bcryptjs");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//#region Standard login
passport.use(
  new LocalStrategy(
    {
      usernameField: "email" ,
      passReqToCallback: true
    },
    async (req,email, password, next) => {
      let user = await models.user.findOne({ where: { email } });
      if (user) {
        let isMatch = await bcryptjs.compare(password, user.password);
        if (isMatch) {
          next(null, user);
        } else {
          if (user.loginType === "standard") {
            req.flash('error',"Invalid password")
            next(null, false, { message: "Invalid password" });
          } else {
            req.flash('error',"Account is using diferent type of login")
            next(null, false, {
              message:
                "Account is asociated with " + user.loginType + " account"
            });
          }
        }
      } else {
        req.flash('error',"User not found")
        next(null, false, { message: "User not found" });
      }
    }
  )
);
//#endregion

//#region Facebook login
passport.use(
  new FacebookStrategy(
    {
      clientID: "1255548587960716",
      clientSecret: "cfacd8d70dc15f3a2bcb1749c19a1fb9",
      callbackURL: "https://magicunbox.com/login/fb/cb",
      scope: ["public_profile", "email"],
      profileFields: ["id", "displayName", "picture", "email"],
    },
    async function(accessToken, refreshToken, profile, cb) {
      let {email, id, name , picture } = profile._json
      console.log(profile._json)
      let user = await models.user.findOne({where: { facebookID : id } });

      if (user) {
        console.log('wtf')
        cb(null, user);
      } else {
        if(email){
          console.log('bre')
          user = await models.user.findOne({where:{email}});
          if(user){
            console.log('dodaj fbid')
            await models.user.update({facebookID : id},{where:{email}})
            cb(null, user);
          }else{
            console.log('pravim novog')
          user = await models.user.create({
            facebookID : id,
            username : name,
            email,
            profileImage : picture.data.url,
            loginType : 'facebook',
          });
          cb(null, user);
          }          
        }else{
          cb(null,false)
        }

    }
  })
);
//#endregion

passport.use(new TwitterStrategy({
    consumerKey: "rjI7WBdXOAUOBqSRXWJHDkxJQ",
    consumerSecret: "kJGLJhTV2Ds9frfQh6nhU80jvOXcHShI4izb21zPPBABJLgf2a",
    callbackURL: "https://localhost:3443/login/twitter/cb",
    includeEmail: true,
    passReqToCallback: true
  },
  async function(req,token, tokenSecret, profile, done) {
    let json = profile._json;
    let [twitterID,name,username,email,profileImage,loginType] = [
      json.id,
      json.name,
      json.screen_name,
      json.email,
      json.profile_image_url_https,
      "twitter"
    ];

    let user = await models.user.findOne({
      where: {
        twitterID
      }
    });

    if (user) {
      done(null, user);
    } else {
      user = await models.user.findOne({where:{email}});
      if(user){
        req.flash("error","Email is asociated with another account")
        done(null,false,{message:"Email is asociated with another account"});
      }else{
      user = await models.user.create({
        twitterID,
        username,
        name,
        email,
        profileImage,
        loginType,
        referalLink: username
      });
      done(null, user);
      }
    }
  })
);

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: "34859425302-b87f2ko592k2ocimk1jk6bn67ckik317.apps.googleusercontent.com",
        clientSecret: "03zYMeTMOUNoHdeoMDDm4OZC",
        callbackURL: 'https://magicunbox.com/login/google/cb',
        scope: [
          'https://www.googleapis.com/auth/plus.me',
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ],
        passReqToCallback: true
    },
    async (req,accessToken, refreshToken, profile, done) => {
        let [googleID,username,name,email,profileImage,loginType]=[
          profile.id,
          profile.emails[0].value.split('@')[0],
          profile.displayName,
          profile.emails[0].value,
          profile.photos.length?profile.photos[0].value:"/img/defaultUser.png",
          "google"
        ]
        let user = await models.user.findOne({
            where: {
              googleID
            }
        });

        if (user) {
            done(null, user);
        } else {
          user = await models.user.findOne({where:{email}});
          if(user){
            req.flash("error","Email is asociated with another account")
            done(null,false,{message:"Email is asociated with another account"});
          }else{
            user = await models.user.create({
              googleID,
              username,
              name,
              email,
              profileImage,
              loginType
            });
          }
          done(null, user);
        }
      }
    )
  );

passport.use(new SteamStrategy({
  returnURL: 'https://magicunbox.com/login/steam/cb',
  realm: 'https://magicunbox.com/',
  apiKey: 'BAC918E393C05F9789FE58D7530AFCFF'
},
async function(identifier, profile, done) {
  // User.findByOpenID({ openId: identifier }, function (err, user) {
  //   return done(err, user);
  // });
  console.log(profile);
  let json = profile._json;
  let [twitterID,name,username,email,profileImage,loginType] = [
    identifier,
    // json.id,
    json.name,
    json.screen_name,
    json.email,
    json.profile_image_url_https,
    "steam"
  ];

  // twitterID  database field is used because twitter is not in function anymore
  user = await models.user.findOne({
    where: {
      twitterID
    }
  });

  if (user) {
    done(null, user);
  } else {
    user = await models.user.findOne({where:{email}});
    if(user){
      req.flash("error","Email is asociated with another account")
      done(null,false,{message:"Email is asociated with another account"});
    }else{
    user = await models.user.create({
      twitterID,
      username,
      name,
      email,
      profileImage,
      loginType,
      referalLink: username
    });
    done(null, user);
    }
  }
}
));