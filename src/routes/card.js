let express = require("express");
let Controller = require("../controllers/card");
const accessLevelCheck = require('../../utils/adminMiddleware')
const userAuthCheck = require('../../utils/userMiddleware')
let router = express.Router();

//router.get("/add", Controller.add);
router.post("/redeem", userAuthCheck, Controller.redeem);

module.exports = router;
