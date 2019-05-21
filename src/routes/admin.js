let express = require("express");
let router = express.Router();
let Items = require("../controllers/admin-items")
let Controller = require("../controllers/admin-boxes");
let promoController = require('../controllers/admin-promoters');
let shippingController = require('../controllers/admin-shipping');
let usersController = require('../controllers/admin-users');
const accessLevelCheck = require('../../utils/adminMiddleware')

router.get("/",accessLevelCheck, Controller.get);
router.get("/box/:name",accessLevelCheck, Controller.box.get);
router.put('/box',accessLevelCheck,Controller.box.updateBox)
router.put('/box/:id',accessLevelCheck,Controller.box.update)
router.put('/box/active/:id',accessLevelCheck,Controller.box.active);

router.get("/items", Items.get); //deda
router.put("/items/:id",accessLevelCheck, Items.edit); //deda

router.post("/items",accessLevelCheck,Controller.item.add);
router.delete("/items",accessLevelCheck,Controller.item.delete);

router.get('/promoters',accessLevelCheck,promoController.get);
router.post('/promoters',accessLevelCheck,promoController.post);
router.delete('/promoters',accessLevelCheck,promoController.delete);

router.get('/shipping',accessLevelCheck,shippingController.get);
router.post('/shipping',accessLevelCheck,shippingController.post);
router.post('/shipping/email',accessLevelCheck,shippingController.email.post);

router.get('/users',accessLevelCheck,usersController.get);
router.post('/users',accessLevelCheck,usersController.post);

module.exports = router;
