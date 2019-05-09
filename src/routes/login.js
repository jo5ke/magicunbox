let express = require("express");
let Controller = require("../controllers/login");
let router = express.Router();
const FacebookStrategy = require("passport-facebook");
const passport = require("passport");

// Standard
router.post("/", Controller.standard.auth, Controller.standard.post);

router.post("/checkVerification", Controller.standard.auth, Controller.checkVerification.post);

// Twitter
router.get('/twitter', Controller.twitter.get);
router.get('/twitter/cb', Controller.twitter.cb.auth ,Controller.twitter.cb.get);

// Facebook
router.get("/fb", Controller.fb.get);
router.get("/fb/cb", Controller.fb.cb.auth, Controller.fb.cb.get);

// Steam
router.get('/steam',Controller.steam.get);
router.get('/steam/cb',Controller.steam.cb.auth, Controller.steam.cb.get);

// Google
router.get('/google',Controller.google.get);
router.get('/google/cb',Controller.google.cb.auth,Controller.google.cb.get);

//router.get('/:id', Controller.show);
//router.put('/:id', Controller.update);
//router.delete('/:id', Controller.delete);

module.exports = router;
