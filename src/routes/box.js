let express = require("express");
let Controller = require("../controllers/box");
let router = express.Router();

const userAuthCheck = require('../../utils/userMiddleware')

router.get("/:id/open", userAuthCheck, Controller.open.get);
router.get("/:id/test", userAuthCheck, Controller.test.get);
router.get('/:name', Controller.slug.get);

module.exports = router;
