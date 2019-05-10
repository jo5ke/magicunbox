let express = require("express");
let Controller = require("../controllers/register");
let router = express.Router();

router.post("/", Controller.post);
router.get("/", Controller.get);

module.exports = router;
