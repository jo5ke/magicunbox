let express = require("express");
let Controller = require("../controllers/coinbase");
let router = express.Router();

const userAuthCheck = require('../../utils/userMiddleware')

router.get("/", userAuthCheck, Controller.get);
router.post("/success", Controller.post);

module.exports = router;
