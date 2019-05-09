let express = require("express");
let Controller = require("../controllers/verification");
let router = express.Router();

//router.post("/", Controller.post);
router.get("/", Controller.get);
router.get("/:token",Controller.token.get);

module.exports = router;