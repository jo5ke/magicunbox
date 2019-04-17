let express = require("express");
let Controller = require("../controllers/inventory");
let router = express.Router();

const userAuthCheck = require('../../utils/userMiddleware')

router.post('/:id/sell', userAuthCheck, Controller.sellItem.post);
router.post('/:id/ship', userAuthCheck, Controller.shipItem.post);

module.exports = router;
