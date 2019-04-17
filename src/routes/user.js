let express = require("express");
let Controller = require("../controllers/user");
let router = express.Router();
const userAuthCheck = require('../../utils/userMiddleware')

router.post('/', userAuthCheck,Controller.post);
router.post('/code', userAuthCheck,Controller.put);

module.exports = router;
