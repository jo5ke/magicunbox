const models = require("../../models");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  post: async (req, res) => {
    var email = req.body.email || "";
    var username = req.body.username || "";
    var password = req.body.password || "";
    var password2 = req.body.password2 || "";
    var tc = req.body.tc || "";
    var type = req.body.type || "";

    req.body.usrname = req.body.username? req.body.username.trim():"";

    // Validation
    req.checkBody('username', "Username is reqired").notEmpty();
    req.checkBody("email", "E-mail is reqired").notEmpty();
    req.checkBody("email", "E-mail is not valid").isEmail();
    req.checkBody("password", "Password is reqired").notEmpty();
    req
      .checkBody("password2", "Passwords do not match")
      .equals(req.body.password);
    req.checkBody("tc","Please make sure to check this box").equals('on');
    if(username && username.length){
      req.checkBody('username',"Username must be at least 6 character long").isLength({min: 6})
      req.checkBody('username',"Username must be max 32 characters long").isLength({max: 32});
      req.checkBody('username',"Username must be alphanumerical").isAlphanumeric();
    }
    if(password && password.length){
      req.checkBody('password', 'Password must be at least 6 character long ').isLength({ min: 6});
    }

    if(email !=='' || username !==''){
      let users = await models.user.findAll({where:{
        [Op.or]:[{email},{username}]
      }});
      if(users){
        users.forEach(user=>{

          if(user.username && username && user.username.toLowerCase() === username.toLowerCase()){
              req.checkBody("username","Username is alredy taken").equals(-1);
          }
          if(user.email && email && user.email.toLowerCase() === email.toLowerCase()) {
              req.checkBody("email","Email is already taken").equals(-1);
          }
        })
      }
    }
    var errors = req.validationErrors();
    if(errors){
      errors = errors.map(error=>{
        return {...error,value:""};
      })
    }
    if (errors) {
      if(type === 'fetch'){
        res.status(200).json({
          error: true,
          data: errors,
          message: "Houston, we have a problem!?!"
        })
      }else{
        res.render("register", { errors: errors });
      }
    } else {
      if(type === "fetch"){
        res.status(200).json({
          error: false,
          data: null,
          message: "Procede with mission!!"
        })
      }else{
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      var newUser = await models.user.create({
        email,
        password,
        username,
        loginType: "standard"
      });
      req.flash("success_msg", "You are registered and now can login");
      backURL=req.header('Referer') || '/';
      res.redirect(backURL);
    }
    }
  }
};
