let express = require("express");
let Controller = require("../controllers/recovery");
let router = express.Router();

router.get("/", Controller.get);
router.post("/",  Controller.post);
router.get("/:token",  Controller.token.get);
router.post("/:token",  Controller.token.post);

module.exports = router;
