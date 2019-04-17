const models = require("../../models");
const sendEmail = require("../../utils/recoveryEmail");
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcryptjs");

module.exports = {
  get: async (req, res) => {
    let user = null;
    if (req.user) {
      user = await models.user.findOne({
        where: {
          id: req.user.id
        }
      });
    }
    registeredUsers = await models.user.count();
    registeredUsers += 11352;
    dropsCount = 21347 + await models.inventory.count();
    res.render("recovery", { user, registeredUsers, dropsCount });
  },
  post: async (req, res) => {
    let email = req.body.email;
    req.checkBody("email", "E-mail is reqired").notEmpty();
    req.checkBody("email", "E-mail is not valid").isEmail();
    var errors = req.validationErrors();

    let user = null;
    if (req.user) {
      user = await models.user.findOne({
        where: {
          id: req.user.id
        }
      });
    }
    registeredUsers = await models.user.count();
    registeredUsers += 11352;
    dropsCount = 21347 + await models.inventory.count();

    if (errors) {
      errors = errors.slice(0, 1);
      res.render("recovery", { errors, registeredUsers, dropsCount, user });
    } else {
      let tuser = await models.user.findOne({ where: { email } });
      if (tuser) {
        let token = uuidv4().replace(/-/gi, "");
        models.user.update(
          {
            passwordResetCode: token
          },
          { where: { email } }
        );
        let name = tuser.name || tuser.username || "";
        sendEmail(email, name, token);
        email += ".";
      }
      res.render("recovery", {
        success: true,
        user,
        email,
        registeredUsers,
        dropsCount
      });
    }
  },
  token: {
    get: async (req, res) => {
      let token = req.params.token;

      let user = null;
      let success = false;
      if (req.user) {
        user = await models.user.findOne({
          where: {
            id: req.user.id
          }
        });
      }
      registeredUsers = await models.user.count();
      registeredUsers += 11352;
      dropsCount = 21347 + await models.inventory.count();

      let tuser = await models.user.findOne({
        where: { passwordResetCode: token }
      });
      if (tuser) {
        success = true;
      }
      let errors = success ? null : [{ msg: "Token expired" }];
      res.render("recovery-2", {
        success,
        token,
        registeredUsers,
        dropsCount,
        user,
        errors
      });
    },
    post: async (req, res) => {
      let token = req.params.token;
      let password = req.body.password;
      let password2 = req.body.password2;
      req.checkBody("password", "Password is required").notEmpty();
      req.checkBody("password2", "Passwords doesn't match").equals(password);
      let errors = req.validationErrors();

      let user = null;
      if (req.user) {
        user = await models.user.findOne({
          where: {
            id: req.user.id
          }
        });
      }
      registeredUsers = await models.user.count();
      registeredUsers += 11352;
      dropsCount = 21347 + await models.inventory.count();

      if (errors) {
        res.render("recovery-2", {
          success: true,
          token,
          registeredUsers,
          dropsCount,
          user,
          errors
        });
      } else {
        let tuser = await models.user.findOne({
          where: { passwordResetCode: token }
        });
        let success = false;
        if (tuser) {
          success = true;
          let salt = await bcrypt.genSalt(10);
          newPassword = await bcrypt.hash(password, salt);

          let result = models.user.update(
            {
              password: newPassword,
              passwordResetCode: null
            },
            {
              where: {
                passwordResetCode: token
              }
            }
          );
          res.redirect("/#login");
        } else {
          res.render("recovery-2", {
            success,
            token,
            registeredUsers,
            dropsCount,
            user,
            errors: [{ msg: "Token expired" }]
          });
        }
      }
    }
  }
};
