let express = require("express");
let Controller = require("../controllers/paypal");
let router = express.Router();

const userAuthCheck = require('../../utils/userMiddleware')

router.get("/success",  Controller.success.get);
router.get("/", userAuthCheck, Controller.pay.get);

module.exports = router;
