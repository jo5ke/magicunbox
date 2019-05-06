let express = require("express");
let router = express.Router();
let Controller = require("../controllers/index");

const userAuthCheck = require('../../utils/userMiddleware')

router.get("/", Controller.index.get);
router.get("/profile", userAuthCheck, Controller.profile.get);
router.get("/profile/:username", Controller.profileSlug.get);
//router.get("/sendmail",Controller.index.sendmail);
router.all("/logout", Controller.logout);
router.all("/legal", Controller.legal.get);

module.exports = router;
