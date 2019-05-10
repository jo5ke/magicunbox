const models = require("../../models");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sgMail = require("@sendgrid/mail");
const uuidv4 = require("uuid/v4");





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
      let token = uuidv4().replace(/-/gi, "");
      console.log('Email token:'+token);

      var newUser = await models.user.create({
        email,
        password,
        username,
        loginType: "standard",
        emailToken:token
      }).then(() => {
        const msg = 
{
    to: `${req.body.email}`,
    from: "no-reply@magicunbox.com",
    subject: "Please activate your magicunbox account",
    text:"We're glad you are here, Magicunbox.",
    html:`<div bgcolor="#FFFFFF">
    <center>
        <table align="center" bgcolor="#d9b3ff" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853bodyTable">
            <tbody><tr>
                <td align="center" valign="top" id="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853bodyCell" style="padding-bottom:60px">
                    <span style="color:#ffe01b;display:none;font-size:0px;height:0px;width:0px">You're almost ready to get started!</span>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                        
                        <tbody><tr>
                            <td align="center" valign="top" bgcolor="#FFFFFF" style="background-color:#00004d">
                                
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:640px" width="100%" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853emailContainer">
                                    <tbody><tr>
                                        <td align="center" valign="top" style="padding:40px">
                                            <a href="https://www.magicunbox.com/" style="text-decoration:none" target="_blank"><img alt="Magicunbox" src="https://magicunbox.com/img/navbarlogo.png" width="200" style="border:0;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:12px;font-weight:400;height:auto;letter-spacing:-1px;padding:0;margin:0;outline:none;text-align:center;text-decoration:none" class="CToWUd"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background-color:#ffffff;padding-top:40px">&nbsp;</td>
                                    </tr>
                                </tbody></table>
                                
                            </td>
                        </tr>
                        
                        
                        <tr>
                            <td align="center" valign="top">
                                
                                <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="background-color:#ffffff;max-width:640px" width="100%" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853emailContainer">
                                    <tbody><tr>
                                        <td align="center" valign="top" bgcolor="#FFFFFF" style="padding-right:40px;padding-bottom:40px;padding-left:40px">
                                            <h1 style="color:#241c15;font-family:Georgia,Times,'Times New Roman',serif;font-size:30px;font-style:normal;font-weight:400;line-height:42px;letter-spacing:normal;margin:0;padding:0;text-align:center">We're glad you're here,<br>Magicunbox.</h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" valign="middle" style="padding-right:40px;padding-bottom:60px;padding-left:40px">
                                            <table border="0" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td align="center" bgcolor="#00004d" ><a style="border-radius:0;border:1px solid #007c89;color:#ffffff;display:inline-block;font-size:16px;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-weight:400;letter-spacing:.3px;padding:20px;text-decoration:none" href="http://localhost:8111/verification/${token}">Activate Account</a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" valign="top" style="padding-right:40px;padding-bottom:40px;padding-left:40px">
                                            <p style="color:#6a655f;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:42px;letter-spacing:normal;margin:0;padding:0;text-align:center">(Just confirming you're you.)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" valign="top" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853footerContent" style="border-top:2px solid #efeeea;color:#6a655f;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:12px;font-weight:400;line-height:24px;padding-top:40px;padding-bottom:40px;text-align:center">
                                            <p style="color:#6a655f;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:12px;font-weight:400;line-height:24px;padding:0 20px;margin:0;text-align:center">© 2001-2019 Magicunbox<sup>®</sup>, All Rights Reserved.<br><a style="color:#6a655f;text-decoration:none">675 Ponce De Leon Ave NE • Suite 5000 • Atlanta, GA 30308 USA</a></p>
                                            <a href="https://magicunbox.com/" style="color:#007c89;font-weight:500;text-decoration:none" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853utilityLink" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mailchimp.com/contact/&amp;source=gmail&amp;ust=1556988606088000&amp;usg=AFQjCNGWaUfwupKmV2f6wPUQei9pJ-Q-dQ">Contact Us</a><span class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853mobileHide"> &nbsp; • &nbsp; </span><a href="https://magicunbox.com/legal#tos" style="color:#007c89;font-weight:500;text-decoration:none" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853utilityLink" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://mailchimp.com/legal/terms/&amp;source=gmail&amp;ust=1556988606088000&amp;usg=AFQjCNEzdFspZ5__xvvz-SW0dbMzrG0wfg">Terms of Use</a><span class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853mobileHide"> &nbsp; • &nbsp; </span><a href="https://magicunbox.com/legal#privacy" style="color:#007c89;font-weight:500;text-decoration:none" class="m_-7309765676424219523m_-4337125242896674519m_-155619913577944892m_-5637489414559323853utilityLink" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://mailchimp.com/legal/privacy/&amp;source=gmail&amp;ust=1556988606088000&amp;usg=AFQjCNEdcoeiG6whPH_Fefvp0wl5O-EE-A">Privacy Policy</a>
                                        </td>
                                    </tr>
                                </tbody></table>
                                
                            </td>
                        </tr>
                        
                    </tbody></table>
                </td>
            </tr>
        </tbody></table>
    </center>
</div>`
};  
      const apiKey='';
      sgMail.setApiKey(apiKey);
      console.log(process.env.SENDGRID_API_KEY);
      sgMail.send(msg).then(res => {
     
        res.forEach((item,index) =>{
          console.log('item of array:'+item);
        });
        
        
    }).catch(err => {
        console.log('The mail is not sent.'+err);
    })
      });
      req.flash("success_msg", "You are registered and now can login");
   //   backURL=req.header('Referer') || '/';
        
  
       res.redirect('/?toast=true');
    }
    }
  },
  get: async (req, res) => {
    
    res.send('register route.');
    
    
  }
};
